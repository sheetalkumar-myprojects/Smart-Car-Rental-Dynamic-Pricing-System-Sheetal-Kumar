

export default function Insurance() {
  const plans = [
    {
      title: "Complete Protection",
      price: "$62.01/day",
      oldPrice: "$71.39/day",
      discount: "13% off",
      features: [
        "No deductible for vehicle loss or damage.",
        "100% coverage for car damage.",
        "24/7 Emergency Roadside Assistance.",
        "Liability coverage.",
        "Accidental injury/death or theft."
      ],
      recommended: true,
    },
    {
      title: "Standard Protection",
      price: "$56.85/day",
      oldPrice: "$63.88/day",
      discount: "11% off",
      features: [
        "No deductible for vehicle loss or damage.",
        "100% coverage for car damage.",
        "24/7 Emergency Roadside Assistance.",
        "Liability coverage."
      ],
    },
    {
      title: "Basic Protection",
      price: "$42.30/day",
      oldPrice: "$46.98/day",
      discount: "10% off",
      features: [
        "No deductible for vehicle loss or damage.",
        "100% coverage for car damage.",
        "24/7 Emergency Roadside Assistance."
      ],
    },
  ];

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Choose Your Coverage</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              width: "250px",
              background: "white",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            {plan.recommended && (
              <span style={{ color: "green", fontWeight: "bold" }}>Recommended</span>
            )}
            <h2>{plan.title}</h2>
            <ul style={{ textAlign: "left" }}>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>{plan.price}</p>
            <p style={{ textDecoration: "line-through", color: "gray" }}>{plan.oldPrice}</p>
            <p style={{ color: "red" }}>{plan.discount}</p>
            <button style={{ padding: "10px 20px", background: "black", color: "white", border: "none", borderRadius: "5px" }}>
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
