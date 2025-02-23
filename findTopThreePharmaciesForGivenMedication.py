import pandas as pd

def find_cheapest_pharmacies(csv_file, medication_to_find, top_n=3):
    df = pd.read_csv(csv_file)

    df.columns = df.columns.str.lower()

    df.iloc[:, 0] = df.iloc[:, 0].astype(str).str.lower()

    filtered_df = df[df.iloc[:, 0] == medication_to_find.lower()]

    if filtered_df.empty:
        print(f"No data found for {medication_to_find}")
        return

    filtered_df.iloc[:, 2] = filtered_df.iloc[:, 2].astype(str).str.replace(r"[$,]", "", regex=True).astype(float)

    sorted_df = filtered_df.sort_values(by=df.columns[2])

    cheapest = sorted_df.head(top_n)

    print(f"Cheapest {top_n} pharmacies for {medication_to_find}:")
    for _, row in cheapest.iterrows():
        print(f"Pharmacy: {row.iloc[1]}, Price: ${row.iloc[2]:.2f}")

# Example usage
find_cheapest_pharmacies("medication_prices.csv", "ibuprofen")
