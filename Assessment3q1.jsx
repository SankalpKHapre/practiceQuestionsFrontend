// COnvert this component into React Components
// class ProfileWidget extends React.Component {
//   state = {
//     isVisible: false,
//     profile: null
//   };

import { useEffect, useState } from "react";

//   componentDidMount() {
//     document.addEventListener("profile-loaded", this.handleLoad);
//     this.fetchProfile();
//   }

//   componentWillUnmount() {
//     document.removeEventListener("profile-loaded", this.handleLoad);
//   }

//   fetchProfile() {
//     fakeApi("/profile").then(data => {
//       this.setState({ profile: data });
//     });
//   }

//   handleLoad = () => {
//     this.setState({ isVisible: true });
//   };

//   render() {
//     return this.state.isVisible
//       ? `Profile shown: ${this.state.profile?.name}`
//       : "Loading...";
//   }
// }



export default function App(){
    const [isVisible,setIsVisible] = useState(false);
    const [profile,setProfile] = useState(null);


    const handleLoad = ()=>{
        setIsVisible(true)
    }

    async function fetchProfile(){
        const apiCall=await fetch('/profilefakeapi')
        const resolvedObj = await apiCall.json();
        setProfile(resolvedObj)

    }


    useEffect(()=>{
        document.addEventListener("profile-loaded", handleLoad);
        fetchProfile()

        return()=>document.removeEventListener("profile-loaded", handleLoad);
    },[])

    return(
        <div>
            {isVisible?profile:"Loading..."}
        </div>
    )

} 