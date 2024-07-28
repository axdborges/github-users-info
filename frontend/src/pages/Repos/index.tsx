import { Card, Typography } from "@material-tailwind/react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

import Loading from "../../components/Loading";

import useFetchUsersQuery from "../../queries/index";
import useUsernameStore from "../../store/index";

import { parseDate } from "../../utils";
import { RepoResponse } from "@shared/types";

const TABLE_HEAD = ["ID", "Name", "URL", "Created At", "Link"];

const Repos = () => {
  const { username } = useUsernameStore();

  const { repos, reposIsLoading } = useFetchUsersQuery(0, username);

  return (
    <>
      {!reposIsLoading ? (
        <Card
          className="h-full w-full overflow-scroll"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {repos.map((repo: RepoResponse) => (
                <tr key={repo.id} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {repo.id}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {repo.name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {repo.html_url}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {parseDate(repo.created_at)}
                    </Typography>
                  </td>
                  <td className="p-4">
										<a className="cursor-pointer" href={repo.html_url} target="_blank">
											<ArrowTopRightOnSquareIcon
												className="h-5 w-5 hover:text-indigo-500"
												color="gray"
											/>
										</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      ) : (
        <Loading message="Loading..." />
      )}
    </>
  );
};

export default Repos;
