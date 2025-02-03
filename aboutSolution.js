```javascript
// pages/about.js
export default function About() {
  const myVariable = undefined;

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>{myVariable?.toString()}</p> {/*Optional chaining*/}
      {/* or  */}
      <p>{myVariable ? myVariable.toString(): 'Variable is undefined'}</p>      
    </div>
  );
}
```