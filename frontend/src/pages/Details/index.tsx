import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Loading from "../../components/Loading";

import useUsernameStore from "../../store/index";
import useFetchUsersQuery from "../../queries/index";
import { parseDate } from "../../utils";

const Details = () => {
  const navigate = useNavigate();
  const { username } = useUsernameStore();

  const { details, detailsIsLoading } = useFetchUsersQuery(0, username);



  if (!detailsIsLoading) console.log(details);

  return (
    <>
      {!detailsIsLoading ? (
        <div
          className=" w-full p-6 md:w-[1330px] md:ml-[-50px] 
					h-full flex items-center flex-col gap-4 justify-center rounded-xl"
        >
          <Card
            className="w-full max-w-[48rem] flex-row"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none text-black"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <img
                src={details.avatar_url || ""}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Typography
                variant="h6"
                color="gray"
                className="uppercase"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Login: {details.login || ""}
              </Typography>
              <Typography
                variant="h6"
                color="gray"
                className="mb-4 uppercase"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                ID: {details.id || ""}
              </Typography>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Profile URL: {details.html_url || ""}
              </Typography>
              <Typography
                color="gray"
                className="mb-2 font-normal"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Bio: {details.bio || ""}
              </Typography>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-10"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Date of Creation: {parseDate(details.created_at) || ""}
              </Typography>
              <a href="#" className="inline-block">
                <Button
                  variant="text"
                  className="flex items-center gap-2"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
									onClick={() => navigate('/user-repos')}
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardBody>
          </Card>
        </div>
      ) : (
        <Loading message="Loading..." />
      )}
    </>
  );
};

export default Details;
