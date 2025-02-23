# Install with pip install firecrawl-py
from firecrawl import FirecrawlApp
from pydantic import BaseModel, Field
from typing import Any, Optional, List
import csv

def main():
    makeCSV()

def makeCSV():
    medications =[
    "bumadizone", "etodolac", "lonazolac", "fentiazac", "acemetacin", "difenpiramide", "oxametacin", "proglumetacin", "ketorolac", "aceclofenac", "bufexamac", "indometacin", "combinations", "diclofenac", 
    "ibuprofen", "naproxen", "ketoprofen", "fenoprofen", "fenbufen", "benoxaprofen", "suprofen", "pirprofen", "flurbiprofen", "indoprofen", "tiaprofenic", "acid", "oxaprozin", "ibuproxam", "dexibuprofen", "flunoxaprofen", "alminoprofen", "dexketoprofen", "naproxcinod", "loxoprofen", "pelubiprofen", "naproxen", "esomeprazole", "naproxen", "misoprostol", "naproxen", "diphenhydramine", "Meloxicam", "Celecoxib", 
    "Acetylsalicylic", "acid", "Aloxiprin", "Choline", "salicylate", "Sodium", "salicylate", "Salicylamide", "Salsalate", "Ethenzamide", "Morpholine", "salicylate", "Dipyrocetyl", "Benorilate", "Diflunisal", "Potassium", "salicylate", "Guacetisal", "Carbasalate", "calcium", "Imidazole", "salicylate", "Aspirin", 
    "Phenazone", "Metamizole", "Aminophenazone", "Propyphenazone", "Nifenazone", "Paracetamol", "Phenacetin", "Bucetin", "Propacetamol", "Tylenol", 
    "Diazepam", "Chlordiazepoxide", "Medazepam", "Oxazepam", "Potassium", "clorazepate", "Lorazepam", "Adinazolam", "Bromazepam", "Clobazam", "Ketazolam", "Prazepam", "Alprazolam", "Halazepam", "Pinazepam", "Camazepam", "Nordazepam", "Fludiazepam", "Ethyl", "loflazepate", "Etizolam", "Clotiazepam", "Cloxazolam", "Tofisopam", "Bentazepam", "Mexazolam", "Hydroxyzine", "Captodiame", "Meprobamate", "Emylcamate", "Mebutamate", "Benzoctamine", "Buspirone", "Mephenoxalone", "Gedocarnil", "Etifoxine", "Fabomotizole", "Lavandulae", "aetheroleum", "Clonazepam", 
    "Pentobarbital", "Amobarbital", "Butobarbital", "Barbital", "Aprobarbital", "Secobarbital", "Talbutal", "Vinylbital", "Vinbarbital", "Cyclobarbital", "Heptabarbital", "Reposal", "Methohexital", "Hexobarbital", "Thiopental", "Ethallobarbital", "Allobarbital", "Proxibarbal", "Chloral", "hydrate", "Chloralodol", "Acetylglycinamide", "chloral", "hydrate", "Dichloralphenazone", "Paraldehyde", "Flurazepam", "Nitrazepam", "Flunitrazepam", "Estazolam", "Triazolam", "Lormetazepam", "Temazepam", "Midazolam", "Brotizolam", "Quazepam", "Loprazolam", "Zolpidem", "Sertraline", "Escitalopram", 
    "Epinephrine", "Isoprenaline", "Orciprenaline", "Salbutamol", "Terbutaline", "Fenoterol", "Rimiterol", "Hexoprenaline", "Isoetarine", "Pirbuterol", "Tretoquinol", "Carbuterol", "Tulobuterol", "Salmeterol", "Formoterol", "Clenbuterol", "Reproterol", "Procaterol", "Bitolterol", "Indacaterol", "Olodaterol", "Beclometasone", "Budesonide", "Flunisolide", "Betamethasone", "Fluticasone", "Triamcinolone", "Mometasone", "Ciclesonide", "Fluticasone furoate", "Ipratropium bromide", "Oxitropium bromide", "Stramoni preparations", "Tiotropium bromide", "Aclidinium bromide", "Glycopyrronium bromide", "Umeclidinium bromide", "Revefenacin", "Cromoglicic acid", "Nedocromil", "Fenspiride", "Ephedrine", "Methoxyphenamine", "Bambuterol", "Diprophylline", "Choline theophyllinate", "Proxyphylline", "Theophylline", "Aminophylline", "Etamiphylline", "Theobromine", "Bamifylline", "Acefylline piperazine", "Bufylline", "Doxofylline", "Mepyramine theophyllinacetate", "Zafirlukast", "Pranlukast", "Montelukast", "Ibudilast", "Amlexanox", "Eprozinol", "Omalizumab", "Seratrodast", "Roflumilast", "Reslizumab", "Mepolizumab", "Benralizumab", "Tezepelumab", 
    "Bromazine", "Diphenhydramine", "Clemastine", "Chlorphenoxamine", "Diphenylpyraline", "Carbinoxamine", "Doxylamine", "Trimethobenzamide", "Dimenhydrinate", "Brompheniramine", "Dexchlorpheniramine", "Dimetindene", "Chlorphenamine", "Pheniramine", "Dexbrompheniramine", "Talastine", "Mepyramine", "Histapyrrodine", "Chloropyramine", "Tripelennamine", "Methapyrilene", "Thonzylamine", "Alimemazine", "Promethazine", "Thiethylperazine", "Methdilazine", "Hydroxyethylpromethazine", "Thiazinam", "Mequitazine", "Oxomemazine", "Isothipendyl", "Buclizine", "Cyclizine", "Chlorcyclizine", "Meclozine", "Oxatomide", "Cetirizine", "Levocetirizine", "Bamipine", "Cyproheptadine", "Thenalidine", "Phenindamine", "Antazoline", "Triprolidine", "Pyrrobutamine", "Azatadine", "Astemizole", "Terfenadine", "Loratadine", "Mebhydrolin", "Deptropine", "Ketotifen", "Acrivastine", "Azelastine", "Tritoqualine", "Ebastine", "Pimethixene", "Epinastine", "Mizolastine", "Fexofenadine", "Desloratadine", "Rupatadine", "Bilastine", "Quifenadine", "Sequifenadine", "Mebhydrolin", "Deptropine", "Ketotifen", "Acrivastine", "Azelastine", "Tritoqualine", "Ebastine", "Pimethixene", "Epinastine", "Mizolastine", "Fexofenadine", "Desloratadine", "Rupatadine", "Bilastine", "Quifenadine", "Sequifenadine", "Thenalidine", "Pyrrobutamine"
    ]

    all_medication_prices = {}

    for medication in medications:

        
        url = f"https://www.rxsaver.com/drugs/{medication}/coupons"
        
        pharmacy_prices = scraper(url, medication)
        
        all_medication_prices[medication] = pharmacy_prices

        print(f"Data for {medication}: {pharmacy_prices}")

    with open("medication_prices.csv", mode="w", newline="", encoding="utf-8") as file:
        writer = csv.writer(file)
        
        writer.writerow(["Medication", "Pharmacy", "Price"])

        for medication, pharmacy_prices in all_medication_prices.items():
            for pharmacy, price in pharmacy_prices.items():
                writer.writerow([medication, pharmacy, price])

    print("CSV file 'medication_prices.csv' has been created with the data.")

def scraper(url, medication):
    app = FirecrawlApp(api_key='fc-4f002f4c4708489badb42b6dffca9c44')

    class NestedModel1(BaseModel):
        pharmacy_name: str
        price: str

    class ExtractSchema(BaseModel):
        pharmacies: List[NestedModel1]

    data = app.extract(
        [url],
        {
            'prompt': f'Extract the current prices for {medication} at the pharmacies listed on the website. Ensure to capture both the pharmacy name and the price of {medication}.',
            'schema': ExtractSchema.model_json_schema(),
        }
    )

    print(data)

    pharmacy_prices = {}

    if 'data' in data and 'pharmacies' in data['data']:
        if len(data['data']['pharmacies']) > 0:
            print(f"Extracted Data for {medication}:")
            for pharmacy in data['data']['pharmacies']:
                pharmacy_name = pharmacy['pharmacy_name']
                price = pharmacy['price']
                print(f"Pharmacy: {pharmacy_name}, {medication} Price: {price}")
                
                pharmacy_prices[pharmacy_name] = price
        else:
            print(f"No pharmacies found for {medication}.")
    else:
        print(f"No pharmacies found in the extracted data for {medication}.")

    return pharmacy_prices

if __name__ == "__main__":
    main()
