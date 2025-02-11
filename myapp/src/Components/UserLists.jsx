
import { useRouter } from 'next/router'



const UsersLists = ({users}) => {
  const router = useRouter()
  return (
    <div className="grid grid-cols-1 gap-4 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-w " >
          {users.map((user, index) => (
            <div
              
              key={index}
              className="shadow-md rounded-lg p-4 font-semibold flex flex-col items-center grid-cols-auto"

              // onClick={() => router.push(`/users/${user.login}`) }
              onClick={() => router.push({
                pathname:`/users/${user.login}`,
                query:{
                  imgUrl:user.avatar_url
                }
              }
              )}
            >
              <img
                src={user.avatar_url}
                className="w-[100px] rounded-full mb-4"
                // alt={`${user.name.first} ${user.name.last}`}
              />
              <div className="space-y-2 w-full">
                <p><b>Name:</b> {user.login} </p>
                {/* <p><b>Email:</b> {user.login} </p>
                <p><b>Followers:</b> {user.login} </p>
                <p><b>Comapny:</b> {user.login} </p> */}
                
                
              </div>
            </div>
          ))}
        </div>
  )
}

export default UsersLists






