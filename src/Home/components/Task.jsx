import styled from "styled-components";

export function Task(props) {
  return (
    <TaskWarpper>
      <TaskContainer>
        <div
          style={{
            width: "60%",
            padding: "0 5px",
            fontStyle: "italic",
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
        >
          {props.name}
        </div>
        <button>edit</button>
        <button>delete</button>
      </TaskContainer>
      <TaskDetails>
        <TaskDetailHeader>Time</TaskDetailHeader>
        <div>{props.time}</div>
      </TaskDetails>
      <TaskDetails>
        <TaskDetailHeader>Description</TaskDetailHeader>
        <div style={{ maxWidth: "40%", textAlign: "end" }}>
          {props.description}
        </div>
      </TaskDetails>
      <TaskDetails>
        <TaskDetailHeader>Category</TaskDetailHeader>
        <div>{props.catgory}</div>
      </TaskDetails>
      <TaskDetails>
        <TaskDetailHeader>Deadline</TaskDetailHeader>
        <div>{props.deadline}</div>
      </TaskDetails>
    </TaskWarpper>
  );
}

const TaskContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const TaskWarpper = styled.div`
  display: "flex";
  flex-direction: "column";
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;

const TaskDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;

const TaskDetailHeader = styled.div`
  font-weight: 300;
`;
