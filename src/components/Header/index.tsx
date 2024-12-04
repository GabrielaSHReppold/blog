import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import { Link, useLocation } from "react-router-dom";
import { themeColors } from "../../config/global/themeColors";

const pages = [
  { label: "Home", to: "/" },
  { label: "Blog", to: "/blog" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export function Header() {
  const { pathname } = useLocation();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: themeColors.background, color: themeColors.text }}
        elevation={0}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: 80,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* Avatar e Título */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                alt="Logo"
                src="/src/assets/icone.webp"
                sx={{
                  width: 60,
                  height: 60,
                  mr: 2,
                  bgcolor: themeColors.accent,
                }}
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  color: themeColors.primary,
                  fontWeight: "bold",
                }}
              >
                Heinen
              </Typography>
            </Box>

            {/* Links de navegação */}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-end",
                gap: 4,
                mr: 2,
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page.to}
                  to={page.to}
                  style={{
                    textDecoration: "none",
                    color: pathname === page.to ? themeColors.primary : themeColors.text,
                    padding: "8px 16px",
                    borderRadius: 8,
                    backgroundColor: pathname === page.to ? themeColors.secondary : "transparent",
                  }}
                >
                  {page.label}
                </Link>
              ))}
            </Box>

            {/* Ícone de configurações */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="User"
                    src="https://via.placeholder.com/40"
                    sx={{ bgcolor: themeColors.accent }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      sx={{ color: themeColors.text }}
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>

          {/* Linha divisória abaixo da Header */}
          <Divider sx={{ backgroundColor: themeColors.accent, height: 2, mt: 1 }} />
        </Container>
      </AppBar>

      {/* Contador de visitantes no final */}
      <Box
        sx={{
          mt: "120px",
          textAlign: "center",
          backgroundColor: themeColors.background,
          color: themeColors.text,
          py: 2,
        }}
      >
        <Typography variant="body2" sx={{ color: themeColors.primary }}>
          Número de visitantes do blog:
        </Typography>
      </Box>
    </>
  );
}
