const queries = [
  "Where is my order?",
  "Can I return a lipstick?",
  "Is this product suitable for oily skin?",
  "My order arrived damaged",
];

function classifyQuery(query) {
  if (query.includes("order")) return "Order Tracking";
  if (query.includes("return")) return "Refund / Return";
  if (query.includes("suitable")) return "Product Query";
  if (query.includes("damaged")) return "Complaint";
  return "Other";
}

function generateReply(category) {
  switch (category) {
    case "Order Tracking":
      return "Thanks for reaching out! We’re checking your order status.";
    case "Refund / Return":
      return "Sure! Please review our return policy or share your order ID.";
    case "Product Query":
      return "Happy to help! This product works well for most skin types.";
    case "Complaint":
      return "We’re sorry for the experience. Our team will contact you shortly.";
    default:
      return "Thanks for contacting us! We’ll assist you soon.";
  }
}

function detectSentiment(query) {
  const negativeWords = [
    "damaged",
    "late",
    "angry",
    "bad",
    "worst",
    "refund",
    "complaint",
  ];
  for (let word of negativeWords) {
    if (query.toLowerCase().includes(word)) {
      return "Negative";
    }
  }
  return "Neutral";
}

queries.forEach((query, index) => {
  const category = classifyQuery(query);
  const sentiment = detectSentiment(query);
  const reply = generateReply(category);
  const escalated = sentiment === "Negative" ? "Yes" : "No";

  console.log(`\nTicket ${index + 1}`);
  console.log("Query:", query);
  console.log("Category:", category);
  console.log("Sentiment:", sentiment);
  console.log("Reply:", reply);
  console.log("Escalated:", escalated);
});
