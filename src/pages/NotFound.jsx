import image from 'assets/images/error-404.webp';

const NotFound = () => {
  return (
    <div>
      <img src={image} alt="not found" style={{ width: 300 }} />
      <p className="my-3">Something wrong...</p>
    </div>
  );
};

export default NotFound;
