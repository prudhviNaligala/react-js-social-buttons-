const Button = (props) => {
  //  Write your code here.
  const { name, className } = props;
  return <button className={`button ${className}`}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button name="like" className="like-button" />
      <Button name="Comment" className="comment-button" />
      <Button name="Share" className="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
