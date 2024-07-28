import { PuffLoader } from 'react-spinners'

const Loading = ({ message }: { message?: string }) => (
  <div className="flex flex-col items-center justify-center w-full h-[50vh] gap-y-6">
    {message && <span className="text-xl text-gray-500">{message}</span>}
    <PuffLoader color="#1e293b" size={100} />
  </div>
)

export default Loading