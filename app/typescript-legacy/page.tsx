// Outdated TypeScript patterns
import React from "react";

// Outdated interface with any types
interface OutdatedInterface {
  id: number;
  name: string;
  data: any; // Should be properly typed
  optional?: any; // Should be properly typed
}

// Outdated function with any parameters
function outdatedFunction(param: any): any {
  return param;
}

// Outdated class with any state
class OutdatedClass {
  private state: any = {};

  constructor(props: any) {
    this.state = props;
  }

  // Outdated method with any return
  getData(): any {
    return this.state;
  }
}

// Outdated component with any props
const OutdatedComponent: React.FC<any> = (props: any) => {
  // Outdated ref pattern
  const ref = React.useRef<any>(null);

  // Outdated event handler
  const handleClick = (event: any) => {
    console.log(event);
  };

  return (
    <div ref={ref} onClick={handleClick}>
      <h1>Outdated TypeScript Patterns</h1>
      <p>This component uses many outdated TypeScript patterns</p>
      <p>Props: {JSON.stringify(props)}</p>
    </div>
  );
};

export default OutdatedComponent;
