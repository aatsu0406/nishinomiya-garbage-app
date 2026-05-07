// 指定された日付がその月の「第何週（第何◯曜日）」かを返す
export const getWeekOfMonth = (date:Date):number => {
  const dayOfMonth = date.getDate();
  return Math.floor((dayOfMonth - 1) / 7) + 1;
};

// 今日のゴミ出し情報を判定するためのヘルパー
export const getDayInfo = (date:Date) => {
  return {
    dayOfWeek:date.getDay(),
    weekNumber:getWeekOfMonth(date),
  };
};