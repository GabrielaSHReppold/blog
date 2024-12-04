import { Box, Typography, IconButton } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TikTokIcon from "@mui/icons-material/Smartphone"; // Placeholder for TikTok, replace with custom icon if available
import { Link } from "react-router-dom";
import { themeColors } from "../../config/global/themeColors";

export function Footer() {
  return (
    <Box
      component="footer"
      bgcolor={themeColors.background}
      color={themeColors.text}
      py={4}
      px={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      borderTop={`2px solid ${themeColors.accent}`}
    >
      {/* Contact Information */}
      <Typography variant="body1" mb={1}>
        <strong>Contact:</strong> reppoldgabriela@gmail.com | +55 51 98238-5497
      </Typography>
      <Typography variant="body1" mb={1}>
        <strong>Location:</strong> Rio Grande do Sul, Brazil
      </Typography>

      {/* Social Media Icons */}
      <Box display="flex" gap={2} mb={2}>
        <IconButton
          component="a"
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          sx={{ color: themeColors.text }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          sx={{ color: themeColors.text }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          sx={{ color: themeColors.text }}
        >
          <TikTokIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          sx={{ color: themeColors.text }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          sx={{ color: themeColors.text }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="mailto:reppoldgabriela@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          sx={{ color: themeColors.text }}
        >
          <EmailIcon />
        </IconButton>
      </Box>

      {/* Copyright Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <CopyrightIcon sx={{ fontSize: 15 }} />
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: themeColors.text,
          }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center", color: themeColors.text }}
          >
            Gabriela Heinen
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}

