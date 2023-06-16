import image from 'assets/images/error-404.webp';

const NotFound = () => {
  return (
    <div>
      <img src={image} alt="not found" />
      <p className="my-3">Something wrong...</p>
    </div>
  );
};

export default NotFound;
