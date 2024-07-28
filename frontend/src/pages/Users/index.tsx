import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Avatar, Button, Card, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

import { useCallback, useState } from "react";
import useFetchUsersQuery from "../../queries";
import useUsernameStore from "../../store";
import { usersResponse } from "@shared/types";



const fadeInUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Users = () => {
  const navigate = useNavigate();
  const [since, setSince] = useState(0);

  const { users, usersIsLoading } = useFetchUsersQuery(since);

	const { setUsername } = useUsernameStore()

  const handleNext = useCallback(() => {
    if (!usersIsLoading) {
      const startIndex = users.link.indexOf("=") + 1;
      const endIndex = users.link.indexOf(">", startIndex);

      const number = users.link.slice(startIndex, endIndex);

      setSince(number);
    }
  }, [usersIsLoading, users?.link]);

  const handlePrev = useCallback(() => setSince(0), []);

	const showUserDetails = useCallback((username: string) => {
		setUsername(username)
		navigate("/user-detail")
	}, [navigate, setUsername])

  return (
    <div className="w-full md:w-[1330px] md:ml-[-50px] h-full flex flex-col gap-4">
      {!usersIsLoading ? (
        <>
          <div className="w-full flex justify-between items-center">
            <Button
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              disabled={since <= 0}
              className={`${
                since === 0 && "bg-gray-200 text-black hover:border-gray-200"
              } `}
              onClick={handlePrev}
            >
              Start
            </Button>
            <Typography
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className="text-black font-bold text-lg"
            >
              GitHub Users
            </Typography>
            <Button
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
          <div className="grid gap-8 self-center grid-cols-1 md:grid-cols-7">
            {users.users.map((w: usersResponse) => (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariant}
                style={{ width: "100%" }}
                key={w.id}
              >
                <Card
                  className="bg-[#e9f4f5] cursor-pointer p-2 flex items-center justify-around h-40 w-40 rounded-md shadow-md"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <Avatar
                    src={w.avatar_url || ""}
                    alt="avatar"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    variant="rounded"
                    className="w-1/2 rounded-full border-2 border-solid border-black"
                  />

                  <Typography
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    className="text-black text-sm"
                  >
                    Login: {w.login || ""}
                  </Typography>

                  <Typography
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    className="text-black text-sm"
                  >
                    Id: {w.id || ""}
                  </Typography>

                  <ArrowTopRightOnSquareIcon
                    className="h-5 w-5 hover:text-indigo-500"
                    color="gray"
                    onClick={() => showUserDetails(w.login)}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center">
          <Loading message="Loading..." />
        </div>
      )}
    </div>
  );
};

export default Users;
