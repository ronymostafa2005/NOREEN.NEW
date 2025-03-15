import { useState } from "react";
import { Box, Typography, IconButton, CircularProgress, Card, CardContent, Menu, MenuItem } from "@mui/material";
import { Apps, Notifications } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
//----------------------------------------
const tasks = [
  { title: "Business Requirements Document", category: "PRD", progress: 60, time: "2 min ago" },
  { title: "Preparing for project power point", category: "Presentation", progress: 70, time: "5 min ago" },
  { title: "Create a proposal PDF file", category: "Proposal", progress: 80, time: "7 min ago" },
];

export default function TaskProgress() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (path) => {
    setAnchorEl(null);
    if (path) navigate(path);
  };

  return (
    <Box sx={{ 
      minHeight: "100vh", 
      bgcolor: "#f9f9f9", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      p: 2 
    }}>
      <Box sx={{ 
        width: "100%", 
        maxWidth: 500, 
        bgcolor: "white", 
        borderRadius: 3, 
        boxShadow: 3, 
        p: 3, 
        mx: "auto" 
      }}>
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <IconButton onClick={handleMenuOpen}>
            <Apps sx={{ color: "#004aad" }} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleMenuClose()}>
            <MenuItem onClick={() => handleMenuClose("/projects")}>Projects</MenuItem>
            <MenuItem onClick={() => handleMenuClose("/Addtask")}>Tasks list</MenuItem>
            <MenuItem onClick={() => handleMenuClose("/ProgressPage ")}>progress</MenuItem>
            <MenuItem onClick={() => handleMenuClose("/calander")}>calander</MenuItem>
            <MenuItem onClick={() => handleMenuClose("/profile")}>Profile</MenuItem>
          </Menu>
          <Typography variant="h6" fontWeight="bold">Friday, 26</Typography>
          <IconButton>
            <Notifications sx={{ color: "#004aad" }} />
          </IconButton>
        </Box>
        
        {/* Title */}
        <Typography variant="h6" fontWeight="bold" mb={2}>In Progress</Typography>
        
        {/* Task List */}
        {tasks.map((task, index) => (
          <Card key={index} sx={{ 
            display: "flex", 
            alignItems: "center", 
            mb: 2, 
            p: 1, 
            borderRadius: 2, 
            boxShadow: 1, 
            width: "100%" 
          }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="caption" color="gray" textTransform="uppercase">{task.category}</Typography>
              <Typography variant="body1" fontWeight="bold">{task.title}</Typography>
              <Typography variant="caption" color="gray">{task.time}</Typography>
            </CardContent>
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress 
                variant="determinate" 
                value={100} 
                size={40} 
                thickness={5} 
                sx={{ color: "#d0d0d0", position: "absolute" }}
              />
              <CircularProgress 
                variant="determinate" 
                value={task.progress} 
                size={40} 
                thickness={5} 
                sx={{ color: "#004aad" }}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="caption" fontWeight="bold" color="#004aad">
                  {`${task.progress}%`}
                </Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
