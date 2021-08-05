import { useParams } from "react-router-dom";

function UsersId() {
   let {userName} = useParams();
   return (
      <div><a href="/users">назад</a>
         <h3>
            User:{userName}
      </h3>
      </div>
   );
};

export default UsersId;