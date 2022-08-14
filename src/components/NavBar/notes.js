//maybe-needed-Trash file

// .app__navbar-menu{
//     width: 50px;
//     height: 50px;
//     background-color: #057DE6;
//     border-radius: 50%;

//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     svg{

//         width: 100%;
//         font-size: 26pt;
//         font-weight: 800;
//         color: #ffffff;

//         &:hover{
//             cursor: pointer;
//         }
//     }

//     div{
//         position: fixed;
//         top: 0;
//         bottom: 0;
//         right: 0;
//         z-index: 5;

//         padding: 1rem;
//         width: 70%;
//         height: 100vh;

//         display: flex;

//         justify-content: flex-end;
//         align-items: flex-end;
//         flex-direction: column;
//         background: url(../../assets/navbar_element5.png) no-repeat center;
//         background-size: 800px;
//         background-position: 50% 98%;

//         background-color: #ffffff;

//         box-shadow: 0 0 20px rgba(168, 168, 168, 0.30);
//         backdrop-filter: blur(4px);

//         svg{
//             width: fit-content;
//             font-size: 30pt;
//             font-weight: 800;
//             color: #021BA4;
//             margin: 0.5rem 1rem;

//         }

//         ul{
//             list-style: none;
//             margin: 0;
//             padding: 0;
//             height: 100%;
//             width: 100%;

//             display: flex;
//             justify-content: flex-start;
//             align-items: flex-start;
//             flex-direction: column;

//             li{

//                 margin: 1.2rem 2.5rem;

//                 a{

//                     text-decoration: none;
//                     text-transform: uppercase;
//                     color: #021BA4;
//                     font-size: 1.5rem;
//                     font-weight: 700;
//                     letter-spacing: 3px;

//                     transition: all 0.2s ease-in-out;

//                         &:hover {
//                             color: #057DE6;
//                         }
//                 }

//             }
//         }
//         @media screen and (max-width: 550px) {
//             background-size: 600px;
//             background-position: 70% 98%;

//         }
//         @media screen and (min-width: 800px) {
//             display: none;
//         }
//     }

//     @media screen and (min-width: 800px) {
//         display: none;
//     }
// }










{
  /* className={
          window.innerWidth < 900
            ? (toggle
            ? "app__navbar-items-open"
            : "app__navbar-items-close")
            : "app__navbar-items"
             
        } */
}

{
  /* <div className="app__navbar-menu">
        <HiMenuAlt3 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            initial={{x:200}}
            whileInView={{ x: [200, 0] }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 30,
            }}
          >
            <HiOutlineX onClick={() => setToggle(false)} />

            <ul>
              {["home", "about", "works", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a onClick={() => setToggle(false)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div> */
}
