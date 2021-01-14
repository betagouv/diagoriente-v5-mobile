import React, { useEffect, useState , useRef} from 'react';
import useStyles from './styles';
import classNames from 'utils/classNames';
interface Props {
    refs: React.MutableRefObject<(HTMLDivElement | null)[]>;
    options:string[],

}
const FooterInfo = ( {refs, options }: Props) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const divSelect = useRef<HTMLDivElement>(null);
  const scrollClick = (index: number) => {
    const currentRef = refs.current[index];

    if (currentRef)
      window.scrollTo({
        top: currentRef.offsetTop - 200  ,
        behavior: "smooth",
      });
    if (currentIndex !== index) {
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const scrollCallBack: any = window.addEventListener("scroll", () => {
      for (let i = refs.current.length - 1; i > -1; i--) {
        const currentRef = refs.current[i];
        if (currentRef) {
          if (window.pageYOffset >= currentRef.offsetTop - 200) {
            setCurrentIndex(i);
            break;
          }
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
    const classes = useStyles();
    return (

    <div ref={divSelect} className={classes.navigation}>
        {options.map((title,index) => (
            <div
            className={classNames( title === "mon profil" && classes.profil,
             title==="mes expériences"&& classes.experience, title === "mes démarches" && classes.demarches )}
             
            >
             <span  onClick={() => {
                scrollClick(index);
              }}  className={classNames(classes.profilLabel,  currentIndex==index && classes.infoActive)}> {title} </span>   
                </div>
        ))
            }
  
  </div>
)
}

export default FooterInfo;
