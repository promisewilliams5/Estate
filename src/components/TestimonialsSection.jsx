import React from 'react'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Aisha Bello",
    rating: 5,
    message:
      "The hotel exceeded my expectations. The rooms were spotless and the staff were amazing.",
    image: "src/assets/profile_img_2.png",
  },
  {
    name: "David Okeke",
    rating: 4,
    message:
      "Great location and comfortable stay. Service was excellent overall.",
    image: "src/assets/profile_img_1.png",
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    message: "Absolutely loved my stay! The pool and spa were fantastic.",
    image: "https://i.pravatar.cc/150?img=32",
  },
];

function RatingStars({ value }) {
  return (
    <Box sx={{ mt: 1 }}>
      {[...Array(value)].map((_, i) => (
        <StarIcon key={i} sx={{ color: "#fbbf24" }} />
      ))}
    </Box>
  );
}

export default function TestimonialsSection() {
  return (
    <Box
      sx={{
        py: 12,
        background: "#f8fafc",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          textAlign="center"
          mb={6}
          fontWeight="bold"
          sx={{ color: "#0f172a" }}
        >
          Testimonials
        </Typography>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  maxWidth: 650,
                  mx: "auto",
                  borderRadius: 4,
                  p: 2,
                  background: "#ffffff",
                  boxShadow: "0 8px 25px rgba(15, 23, 42, 0.08)",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Avatar
                    src={item.image}
                    sx={{
                      width: 80,
                      height: 80,
                      mx: "auto",
                      mb: 2,
                      border: "3px solid #e2e8f0",
                    }}
                  />

                  <Typography variant="body1" mb={2} sx={{ color: "#334155" }}>
                    “{item.message}”
                  </Typography>

                  <RatingStars value={item.rating} />

                  <Typography
                    mt={2}
                    fontWeight="bold"
                    sx={{ color: "#0f172a" }}
                  >
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}