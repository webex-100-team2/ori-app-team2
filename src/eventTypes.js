// 予定の種類と、カレンダーで使う枠の色
export const EVENT_TYPES = [
  { name: "ライブ・イベント", color: "#ec4899" },
  { name: "締切", color: "#ef4444" },
  { name: "発売日", color: "#eab308" },
  { name: "配信・放送", color: "#3b82f6" },
  { name: "その他", color: "#9ca3af" },
];

// チケットの状態。チケットがない予定は "" にする
export const TICKET_STATUSES = ["申込済み", "当選", "入金済み", "発券済み"];

// 種類の名前から色を返す。見つからなければグレー
export function getTypeColor(typeName) {
  const found = EVENT_TYPES.find((type) => type.name === typeName);
  if (found === undefined) {
    return "#9ca3af";
  }
  return found.color;
}
