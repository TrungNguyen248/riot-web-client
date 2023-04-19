import ReactPlayer from "react-player"

function Video({url}) {
    return ( 
            <ReactPlayer 
                url={url} 
                loop={true}
                playing={true}
                muted={true}    
                height={'100%'}
                width={'100%'}
                controls={false}
            />
    );
}

export default Video;