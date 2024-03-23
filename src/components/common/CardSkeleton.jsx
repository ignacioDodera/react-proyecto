import { Box, Skeleton, Stack } from "@mui/material";

export const CardSkeleton = () => {
  return (
    <Stack
      spacing={1}
      sx={{
        boxShadow: "0px 0px 5px grey",
        borderRadius: 3,
        width: 385,
        height: 580,
        overflow: "hidden",
      }}
    >
      <Skeleton
        variant="rectangular"
        width={385}
        height={520}
        animation="wave"
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Skeleton variant="text" width={200} height={50} animation="wave" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Skeleton variant="text" width={380} height={40} animation="wave" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "right" }}>
        <Skeleton variant="text" width={100} height={40} animation="wave" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Skeleton
          variant="rectangular"
          width={130}
          height={30}
          animation="wave"
        />
      </Box>
    </Stack>
  );
};
