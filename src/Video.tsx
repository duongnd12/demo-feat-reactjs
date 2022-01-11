import { forwardRef, useImperativeHandle, useRef } from 'react'
interface IVideoProps {
    ref: any
}
const Video = (props: IVideoProps, ref: any) => {

    const videoRef = useRef<any>()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },

        pause() {
            videoRef.current.pause()
        }
    }))

  return (
    <div>
      <video
        ref={videoRef}
        height={600}
        src="https://v16-webapp.tiktok.com/9ae9d1545203907f1829b31c17d066b5/61cda9d3/video/tos/alisg/tos-alisg-pve-0037/fe33e7a0cf1d4acab9cbfa41bb7337c8/?a=1988&br=3740&bt=1870&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fpckag3-I&l=20211230064453010245242197141B2950&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzh4cGQ6ZnZ4OjMzODgzNEApZTY0ZDM6NGUzNzM1ZzpoaGdsam5ecjRfZi9gLS1kLy1zcy5eYDAtMGAuLi80LS4uMWA6Yw%3D%3D&vl=&vr="
      />
    </div>
  );
};

export default forwardRef(Video);
