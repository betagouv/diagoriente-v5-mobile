import React, { useEffect, useState , useRef} from 'react';
import useStyles from './styles';
import classNames from 'utils/classNames';
import { makeStyles } from '@material-ui/core';
interface Props {
    refs: React.MutableRefObject<(HTMLDivElement | null)[]>;
    options:string[],

}
const FooterInfo = ( {refs, options }: Props) => {
  const isBrowser = typeof window !== 'undefined';
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);
  const [height, setHeight] = useState(isBrowser ? window.innerHeight : 0);

    const [currentIndex, setCurrentIndex] = useState(0);
    const divSelect = useRef<HTMLDivElement>(null);
  const scrollClick = (index: number) => {
    const currentRef = refs.current[index];
    if (currentRef)
      window.scrollTo({
        top: currentRef.offsetTop   ,
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
          if (width >= 400 && window.pageYOffset >= currentRef.offsetTop - 450 && width < 400 &&  window.pageYOffset >= currentRef.offsetTop - 300 && height < 600 && window.pageYOffset ) {
                  setCurrentIndex(i);
                  break
          
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
              }}  className={classNames(classes.profilLabel,  currentIndex===index   && classes.infoActive)}> {title} </span>   
                </div>
        ))
            }
  
  </div>
)
}

export default FooterInfo;
