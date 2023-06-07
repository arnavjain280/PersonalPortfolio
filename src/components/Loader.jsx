import { Html, useProgress} from "@react-three/drei"
const Loader = () => {
  const {progress} = useProgress();
  return (
    // show progress of the load */}
    <Html>
      <span className="canvas-load"> </span>
      <p
        className="canvas-load"
        style={{
          fontSize: 30,
          color: "#915EFF",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%</p> 
    </Html>
  )
}

export default Loader