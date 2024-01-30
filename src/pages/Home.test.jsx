import { render ,screen} from "@testing-library/react";
import Home from "./Home";

describe("Testing Home components", ()=>{

  test("Home testing for name", () => {
    render(<Home />);
    
    const linkElement = screen.getByText(/Ajit Goud/i);
    expect(linkElement).toBeInTheDocument();
  
  });
  
  
  test("Home testing for profession", () => {
    render(<Home />);
    
    const linkElement = screen.getByText(/Software Engineer/i, {exact:false});
    expect(linkElement).toBeInTheDocument();
  
  });
}

)
