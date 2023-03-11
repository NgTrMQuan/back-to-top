import React from "react";
import { useEffect , useState} from "react";
function BackToTopButton() {
    const [BackToTopButton , setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        })
    },[])

    const scrollup = () => {
        window.scrollTo({ top: 0, behavior:'smooth' });
    }

    return (
      <div className="App">
        {BackToTopButton && (
            <button 
            style={{
                position: "fixed",
                bottom: "50px",
                right: "50px",
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                backgroundColor: "white",
                color: "black",
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
            }}
            className="back-to-top-button" onClick={scrollup}></button>
        )}
      </div>
    );
  }
  
  export default BackToTopButton;