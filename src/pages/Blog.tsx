import { Grid2, Typography } from "@mui/material";
import { SectionChips } from "../components/SectionChips/index";
import { CardPost } from "../components/CardPost/index";
import { blogList } from "../mock/blog-list";
import { themeColors } from "../config/global/themeColors";


export function Blog() {
  return (
    <Grid2 container spacing={2} sx={{ backgroundColor: themeColors.background, color: themeColors.text }}>
      <Grid2 size={{ xs: 12, md: 12 }}>
        <Typography variant="h2" sx={{ color: themeColors.primary }}>Blog</Typography>
      </Grid2>
      <Grid2 size={12}>
        <Typography variant="body1" sx={{ color: themeColors.text }}>
          Explore updates for developers, learning insights, portfolios, and client testimonials.
        </Typography>
      </Grid2>

      <SectionChips />

      {blogList.map((post, index) => (
        <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 4 }} key={index}>
          <CardPost
            img={post.img}
            title={post.title}
            author={post.author}
            rating={post.rating}
            createdAt={post.createdAt}
            categories={post.categories}
            description={post.description}
          />
        </Grid2>
      ))}
    </Grid2>
  );
}

