const ImageComponent = (props) => {
    return (
      <div className="">
        <img src={props.url}></img>
        {/* <Image src={animalPhoto} alt="photo" width={200} height={200} /> */}
      </div>
    );
  };
  
  export default ImageComponent;