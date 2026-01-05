import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import type { ArticleCardProps } from "./types.ts";
import type { FC } from "react";
import styles from "./ArticleCard.module.scss";
import Box from "@mui/material/Box";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const ArticleCard: FC<ArticleCardProps> = ({ img, date, title, text }) => {
  function formatDateWithSuffix(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
          ? "nd"
          : day % 10 === 3 && day !== 13
            ? "rd"
            : "th";
    return `${month} ${day}${suffix}, ${year}`;
  }

  return (
    <Card className={styles.card}>
      <CardActionArea className={styles.main}>
        <CardMedia
          component="img"
          image={img}
          alt={title}
          className={styles.media}
        />

        <CardContent className={styles.content}>
          <Box className={styles.dateRow}>
            <CalendarTodayIcon className={styles.dateIcon} />
            <Typography
              variant="caption"
              color="text.disabled"
              className={styles.dateTime}
            >
              {formatDateWithSuffix(date)}
            </Typography>
          </Box>

          <Typography
            gutterBottom
            variant="h6"
            component="h3"
            className={styles.title}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.text}
          >
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className={styles.actions}>
        <Button size="small" className={styles.readMore}>
          Read more →
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
