  import React from 'react';
  import { Card, CardContent, CardMedia, Typography, Button, Avatar, Box } from '@mui/material';

  const blogs = [
    {
      title: "Blog One",
      description: "This is a short description of blog one.",
      author: "Alice",
      avatar: "https://i.pravatar.cc/40?img=1"
    },
    {
      title: "Blog Two",
      description: "This is a short description of blog two.",
      author: "Bob",
      avatar: "https://i.pravatar.cc/40?img=2"
    },
    {
      title: "Blog Three",
      description: "This is a short description of blog three.",
      author: "Charlie",
      avatar: "https://i.pravatar.cc/40?img=3"
    }
  ];

  export default function Blogs() {
    return (
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {blogs.map((blog, index) => (
          <Card key={index} className="w-80 shadow-lg hover:scale-105 transition-transform">
            <CardMedia
              height="140"
              alt={blog.title}
            />
            <CardContent>
              {/* Avatar and author */}
              <Box className="flex items-center mb-2 gap-2">
                <Avatar alt={blog.author} src={blog.avatar} />
                <Typography variant="subtitle2" color="text.secondary">
                  {blog.author}
                </Typography>
              </Box>

              <Typography gutterBottom variant="h5" component="div">
                {blog.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {blog.description}
              </Typography>
            </CardContent>
            <div className="p-4">
              <Button variant="contained" color="primary" fullWidth>
                Read More
              </Button>
            </div>
          </Card>
        ))}
      </div>
    );
  }
