// props
// import React from "react";
// import Clothes from "./Clothes"; //Import component vào
// function App(props) {
//   return (
//     <div>
//       <Clothes name="Quần jean" type="Skinny" color ="Đen" size = "L">Clothes 1</Clothes>
//       <Clothes name="Váy" type="váy công chúa" color ="Trắng" size = "M">Clothes 2</Clothes>
//     </div>
//   );
// }
// export default App;



// State
// import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     //Chỉ định một state
//     this.state = { index: 1 };
//   }
//   render() {
//     return (
//       <div>
//         <p>Giá trị {this.state.index}</p>
//         <button
//           onClick={() => {
//             this.setState({
//               index: this.state.index + 1
//             })
//           }}
//         >
//           Tăng
//         </button>
//         <button
//           onClick={() => {
//             this.setState({
//               index: this.state.index -1
//             })
//           }}
//         >
//           Giảm
//         </button>
//       </div>
//     );
//   }
// }
// export default App;



// useState
// //Gọi React và useState
// import React, { useState } from "react";

// //Component hiển thi thêm nội dung
// const MoreContent = () => {
//   return (
//     <p>

//       1500s, when an unknown printer took a galley of type and scrambled it to
//       make a type specimen book. It has survived not only five centuries, but
//       also the leap into electronic typesetting, remaining essentially
//       unchanged. It was popularised in the 1960s with the release of Letraset
//       sheets containing Lorem Ipsum passages, and more recently with desktop
//       publishing software like Aldus PageMaker including versions of Lorem
//       Ipsum.
//     </p>

//   );
// };

// export default function App(props) {
//   //Sử duụng useState 
//   // isShow là một state
//   // setShow là function giúp cập nhật state
//   // Giá trị mặc định ban đầu của state là false
//   const [isShow, setShow] = useState(false);
//   return (
//     <div>
//       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>

//       {isShow === true ? <MoreContent /> : ''}
//       {isShow === false ? <a href="/#" onClick={() => {
//         // Khi click vào button
//         // cập nhật state bằng cách gọi hàm
//         // setShow đã được khai báo bên trên/
//         setShow(true)
//       }}>Read more</a> : ''}
//       {/* {isShow === true ? <MoreContent /> : <a href="/#" onClick={() => {
//         // Khi click vào button
//         // cập nhật state bằng cách gọi hàm
//         // setShow đã được khai báo bên trên/
//         setShow(true)
//       }}>Read more</a>} */}
//       {/* {isShow === true ? <a href="/#" onClick={() => {
//         // Khi click vào button
//         // cập nhật state bằng cách gọi hàm
//         // setShow đã được khai báo bên trên/
//         setShow(false)
//       }}>Hide</a>: '' }
//       {isShow === true ? <MoreContent /> : <a href="/#" onClick={() => {
//         // Khi click vào button
//         // cập nhật state bằng cách gọi hàm
//         // setShow đã được khai báo bên trên/
//         setShow(true)
//       }}>Read more</a>} */}

//     </div>
//   );
// }





// //callAPI useState
// import React, { useState } from "react";
// import axios from "axios"; //Sử dụng axios

// //Component hiển thị danh sách người dùng
// const ShowUser = (props) => {
//   //Lấy giá tri của props listUser
//   const { listUser } = props;

//   // Render ra list user
//   // React.Fragment cho phép bọc JSX lại.
//   // List Keys :  chỉ định key, giúp loại bỏ cảnh báo.
//   return (
//     <div>
//       {listUser.map((user, index) => {
//         return (
//           <React.Fragment key={user.id}>
//             <ul>
//               <li>{user.name}</li>
//               <li>{user.email}</li>
//             </ul>
//             <hr />
//           </React.Fragment>
//         );
//       })}
//     </div>
//   );
// };

// export default function App(props) {
//   //Khai báo state, sử dụng hook: useState
//   const [listUser, setListUser] = useState([]);
//   const [isLoading, setLoading] = useState(false);

//   //API chứa dữ liệu người dùng
//   const getUserAPI =
//     "https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users";

//   //Hàm fetch API để lấy dữ liệu ng. dùng
//   const getUser = () => {
//     //Cập nhật lại giá trị của state loading
//     setLoading(true);

//     //Thực hiện gọi api
//     axios
//       .get(getUserAPI)
//       .then((res) => {
//         //Cập nhật giá trị của state listUser
//         setListUser(res.data);
//       })
//       .catch((err) => {
//         //Trường hợp xảy ra lỗi
//         alert("Không thể kết nối tới server");
//       })
//       .finally(() => {
//         // Câu lệnh trong này được khởi chạy mỗi khi call API xong
//         // bất kể thất bại hay không.
//         // ...
//         setLoading(false); //Cập nhật giá trị của state isLoading
//       });
//   };

//   return (
//     <>
//       <code>freetuts.net</code> <br />
//       {isLoading ? "loading..." : <button onClick={getUser}>Get User</button>}
//       <ShowUser listUser={listUser} />
//     </>
//   );
// }



// //Handling Event
// import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isShow: true
//     };
//   }
//   toggleMSG() {
//     this.setState({
//       isShow: !this.state.isShow
//     });
//   }
//   render() {
//     return (
//       <div>
//        <b>Nội dung : {this.state.isShow ? "Freetuts.net - Lập trình ReactJS" : ""}</b>  <br />
//         <button onClick={() => this.toggleMSG()}>
//           {this.state.isShow ? "HIDE" : "SHOW"}
//         </button>
//       </div>
//     );
//   }
// }
// export default App;

import React from 'react'
import ToDoList from "./component/ToDoList/index"
import "./App.css"
const App = () => {

    return (
        
        <div className='Appp'>
            <h1>Your List:</h1>
            <ToDoList />
        </div>

    )
}

export default App