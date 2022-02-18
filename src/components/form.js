import { TextField, Button } from "@mui/material";
import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import ClearIcon from "@mui/icons-material/Clear";

class Handling extends Component {
  state = {
    conditions: [],
  };
  handleUpdate = (e, index) => {
    const { name, value } = e.target;
    const conditions = [...this.state.conditions];
    conditions[index][name] = value;
    this.setState({
      conditions,
    });
  };
  handleDelete = (index) => {
    const conditions = [...this.state.conditions];
    conditions.splice(index, 1);
    this.setState({
      conditions,
    });
  };
  handleClick = () => {
    let { conditions } = this.state;
    conditions.push({
      name: "",
      operator: "",
      value: "",
    });
    this.setState({ conditions: conditions });
  };

  render() {
    console.log(":::::::", this.state.conditions);
    return (
      <>
        <h1>Hello State Handling Form</h1>
        <Grid container direction="column" spacing={2}>
          {this.state.conditions.map((item, index) => (
            <Grid item key={index}>
              <Grid container direction="row" spacing={2}>
                <Grid item>
                  <TextField
                    size="small"
                    id="outlined-basic"
                    variant="outlined"
                    name="name"
                    value={item.name}
                    onChange={(e) => this.handleUpdate(e, index)}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    size="small"
                    id="outlined-basic"
                    variant="outlined"
                    name="operator"
                    value={item.operator}
                    onChange={(e) => this.handleUpdate(e, index)}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    size="small"
                    id="outlined-basic"
                    variant="outlined"
                    name="value"
                    value={item.value}
                    onChange={(e) => this.handleUpdate(e, index)}
                  />
                </Grid>
                <Grid item>
                  <ClearIcon
                    onClick={() => {
                      this.handleDelete(index);
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Button onClick={this.handleClick}>Add Condition</Button>
      </>
    );
  }
}

export default Handling;
