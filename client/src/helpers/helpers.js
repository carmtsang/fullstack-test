import moment from "moment";

export function showTime(date) {
  const timeAgo = moment(date).fromNow();
  const showDate = moment(date).format("ll");
  const now = moment();

  if (moment(date).isSame(now, "day")) {
    return timeAgo;
  }

  return showDate;
}
