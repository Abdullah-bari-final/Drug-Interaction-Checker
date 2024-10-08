const mockInteractions = {
    "abacavir": {
        "alcohol": { message: "May increase the risk of liver damage.", severity: "moderate" },
        "methadone": { message: "May decrease the effectiveness of methadone.", severity: "moderate" },
    },
    "abatacept": {
        "etanercept": { message: "May increase the risk of serious infections.", severity: "severe" },
        "adalimumab": { message: "May increase the risk of serious infections.", severity: "severe" },
    },
    "abemaciclib": {
        "ketoconazole": { message: "May increase abemaciclib levels in the blood.", severity: "moderate" },
        "clarithromycin": { message: "May increase abemaciclib levels in the blood.", severity: "moderate" },
    },
    "acarbose": {
        "digoxin": { message: "May decrease digoxin absorption.", severity: "moderate" },
        "insulin": { message: "May increase the risk of hypoglycemia.", severity: "moderate" },
    },
    "acebutolol": {
        "amiodarone": { message: "May increase the risk of bradycardia.", severity: "moderate" },
        "diltiazem": { message: "May increase the risk of hypotension and bradycardia.", severity: "moderate" },
    },
    "acetaminophen": {
        "alcohol": { message: "May increase the risk of liver damage.", severity: "severe" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "acetazolamide": {
        "aspirin": { message: "May increase the risk of metabolic acidosis.", severity: "moderate" },
        "lithium": { message: "May decrease lithium excretion.", severity: "moderate" },
    },
    "acetic acid": {
        "chlorhexidine": { message: "May decrease the effectiveness of chlorhexidine.", severity: "mild" },
    },
    "acetylcysteine": {
        "nitroglycerin": { message: "May enhance the vasodilating effect of nitroglycerin.", severity: "moderate" },
    },
    "acitretin": {
        "tetracycline": { message: "May increase the risk of intracranial hypertension.", severity: "severe" },
        "vitamin A": { message: "May increase the risk of vitamin A toxicity.", severity: "severe" },
    },
    "aclidinium": {
        "anticholinergics": { message: "May increase anticholinergic side effects.", severity: "moderate" },
    },
    "acyclovir": {
        "zidovudine": { message: "May increase the risk of neurological side effects.", severity: "moderate" },
        "probenecid": { message: "May increase acyclovir levels in the blood.", severity: "moderate" },
    },
    "adalimumab": {
        "abatacept": { message: "May increase the risk of serious infections.", severity: "severe" },
        "anakinra": { message: "May increase the risk of serious infections.", severity: "severe" },
    },
    "adapalene": {
        "benzoyl peroxide": { message: "May increase skin irritation.", severity: "mild" },
    },
    "adefovir": {
        "tenofovir": { message: "May increase the risk of kidney problems.", severity: "severe" },
        "cidofovir": { message: "May increase the risk of kidney problems.", severity: "severe" },
    },
    "adenosine": {
        "dipyridamole": { message: "May increase adenosine levels in the blood.", severity: "moderate" },
        "carbamazepine": { message: "May increase the risk of heart block.", severity: "severe" },
    },
    "agalsidase beta": {
        "chloroquine": { message: "May decrease the effectiveness of agalsidase beta.", severity: "moderate" },
        "amiodarone": { message: "May decrease the effectiveness of agalsidase beta.", severity: "moderate" },
    },
    "albendazole": {
        "dexamethasone": { message: "May decrease albendazole levels in the blood.", severity: "moderate" },
        "cimetidine": { message: "May increase albendazole levels in the blood.", severity: "moderate" },
    },
    "albiglutide": {
        "insulin": { message: "May increase the risk of hypoglycemia.", severity: "moderate" },
        "sulfonylureas": { message: "May increase the risk of hypoglycemia.", severity: "moderate" },
    },
    "albuterol": {
        "propranolol": { message: "May decrease the effectiveness of albuterol.", severity: "moderate" },
        "diuretics": { message: "May increase the risk of hypokalemia.", severity: "moderate" },
    },
    "alcaftadine": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "mild" },
    },
    "alectinib": {
        "rifampin": { message: "May decrease alectinib levels in the blood.", severity: "severe" },
        "ketoconazole": { message: "May increase alectinib levels in the blood.", severity: "moderate" },
    },
    "alendronate": {
        "calcium supplements": { message: "May decrease alendronate absorption.", severity: "moderate" },
        "aspirin": { message: "May increase the risk of stomach irritation.", severity: "moderate" },
    },
    "alfuzosin": {
        "ketoconazole": { message: "May increase alfuzosin levels in the blood.", severity: "moderate" },
        "diltiazem": { message: "May increase the risk of hypotension.", severity: "moderate" },
    },
    "aliskiren": {
        "cyclosporine": { message: "May increase aliskiren levels in the blood.", severity: "severe" },
        "potassium supplements": { message: "May increase the risk of hyperkalemia.", severity: "severe" },
    },
    "allopurinol": {
        "mercaptopurine": { message: "May increase mercaptopurine levels in the blood.", severity: "severe" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "almotriptan": {
        "propranolol": { message: "May increase almotriptan levels in the blood.", severity: "moderate" },
        "ssris": { message: "May increase the risk of serotonin syndrome.", severity: "severe" },
    },
    "alogliptin": {
        "insulin": { message: "May increase the risk of hypoglycemia.", severity: "moderate" },
        "sulfonylureas": { message: "May increase the risk of hypoglycemia.", severity: "moderate" },
    },
    "alprazolam": {
        "ketoconazole": { message: "May increase alprazolam levels in the blood.", severity: "severe" },
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
    },
    "alteplase": {
        "aspirin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "heparin": { message: "May increase the risk of bleeding.", severity: "severe" },
    },
    "aluminum hydroxide": {
        "quinolone antibiotics": { message: "May decrease antibiotic absorption.", severity: "moderate" },
        "levothyroxine": { message: "May decrease levothyroxine absorption.", severity: "moderate" },
    },
    "amantadine": {
        "alcohol": { message: "May increase the risk of side effects.", severity: "moderate" },
        "anticholinergics": { message: "May increase anticholinergic side effects.", severity: "moderate" },
    },
    "ambrisentan": {
        "cyclosporine": { message: "May increase ambrisentan levels in the blood.", severity: "moderate" },
        "rifampin": { message: "May decrease ambrisentan levels in the blood.", severity: "moderate" },
    },
    "amikacin": {
        "furosemide": { message: "May increase the risk of kidney damage.", severity: "severe" },
        "vancomycin": { message: "May increase the risk of kidney damage.", severity: "severe" },
    },
    "amiloride": {
        "lithium": { message: "May increase lithium levels in the blood.", severity: "severe" },
        "ace inhibitors": { message: "May increase the risk of hyperkalemia.", severity: "severe" },
    },
    "aminocaproic acid": {
        "estrogens": { message: "May increase the risk of blood clots.", severity: "severe" },
        "tranexamic acid": { message: "May increase the risk of blood clots.", severity: "severe" },
    },
    "amiodarone": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "digoxin": { message: "May increase digoxin levels in the blood.", severity: "severe" },
    },
    "amitriptyline": {
        "ssris": { message: "May increase the risk of serotonin syndrome.", severity: "severe" },
        "tramadol": { message: "May increase the risk of seizures.", severity: "severe" },
    },
    "amlodipine": {
        "simvastatin": { message: "May increase simvastatin levels in the blood.", severity: "moderate" },
        "grapefruit juice": { message: "May increase amlodipine levels in the blood.", severity: "moderate" },
    },
    "amoxicillin": {
        "allopurinol": { message: "May increase the risk of skin rash.", severity: "moderate" },
        "oral contraceptives": { message: "May decrease the effectiveness of oral contraceptives.", severity: "moderate" },
    },
    "amphetamine": {
        "maois": { message: "May cause severe hypertensive crisis.", severity: "severe" },
        "ssris": { message: "May increase the risk of serotonin syndrome.", severity: "severe" },
    },
    "amphotericin b": {
        "corticosteroids": { message: "May increase the risk of hypokalemia.", severity: "moderate" },
        "digoxin": { message: "May increase the risk of digoxin toxicity.", severity: "severe" },
    },
    "ampicillin": {
        "allopurinol": { message: "May increase the risk of skin rash.", severity: "moderate" },
        "oral contraceptives": { message: "May decrease the effectiveness of oral contraceptives.", severity: "moderate" },
    },
    "anagrelide": {
        "aspirin": { message: "May increase the risk of bleeding.", severity: "moderate" },
        "cilostazol": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "anakinra": {
        "etanercept": { message: "May increase the risk of serious infections.", severity: "severe" },
        "infliximab": { message: "May increase the risk of serious infections.", severity: "severe" },
    },
    "anastrozole": {
        "tamoxifen": { message: "May decrease the effectiveness of anastrozole.", severity: "moderate" },
        "estrogens": { message: "May decrease the effectiveness of anastrozole.", severity: "severe" },
    },
    "anidulafungin": {
        "cyclosporine": { message: "May increase cyclosporine levels in the blood.", severity: "moderate" },
        "tacrolimus": { message: "May increase tacrolimus levels in the blood.", severity: "moderate" },
    },
    "apixaban": {
        "aspirin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "nsaids": { message: "May increase the risk of bleeding.", severity: "severe" },
    },
    "apomorphine": {
        "ondansetron": { message: "May cause severe hypotension.", severity: "severe" },
        "domperidone": { message: "May cause severe hypotension.", severity: "severe" },
    },
    "aprepitant": {
        "warfarin": { message: "May decrease the effectiveness of warfarin.", severity: "moderate" },
        "oral contraceptives": { message: "May decrease the effectiveness of oral contraceptives.", severity: "moderate" },
    },
    "arformoterol": {
        "beta-blockers": { message: "May decrease the effectiveness of arformoterol.", severity: "moderate" },
        "diuretics": { message: "May increase the risk of hypokalemia.", severity: "moderate" },
    },
    "argatroban": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "aspirin": { message: "May increase the risk of bleeding.", severity: "severe" },
    },
    "aripiprazole": {
        "carbamazepine": { message: "May decrease aripiprazole levels in the blood.", severity: "moderate" },
        "fluoxetine": { message: "May increase aripiprazole levels in the blood.", severity: "moderate" },
    },
    "armodafinil": {
        "oral contraceptives": { message: "May decrease the effectiveness of oral contraceptives.", severity: "moderate" },
        "cyclosporine": { message: "May decrease cyclosporine levels in the blood.", severity: "moderate" },
    },
    "arsenic trioxide": {
        "qtc prolonging drugs": { message: "May increase the risk of QT interval prolongation.", severity: "severe" },
        "diuretics": { message: "May increase the risk of QT interval prolongation.", severity: "severe" },
    },
    "artemether": {
        "grapefruit juice": { message: "May increase artemether levels in the blood.", severity: "moderate" },
        "rifampin": { message: "May decrease artemether levels in the blood.", severity: "severe" },
    },
    "articaine": {
        "sulfite-containing drugs": { message: "May increase the risk of allergic reactions.", severity: "moderate" },
    },
    "ascorbic acid": {
        "acetaminophen": { message: "May increase the risk of kidney stones.", severity: "mild" },
        "aluminum-containing antacids": { message: "May increase aluminum absorption.", severity: "moderate" },
    },
    "asenapine": {
        "paroxetine": { message: "May increase asenapine levels in the blood.", severity: "moderate" },
        "carbamazepine": { message: "May decrease asenapine levels in the blood.", severity: "moderate" },
    },
    "aspirin": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "ibuprofen": { message: "May decrease the cardioprotective effects of aspirin.", severity: "moderate" },
    },
    "atazanavir": {
        "proton pump inhibitors": { message: "May decrease atazanavir absorption.", severity: "severe" },
        "simvastatin": { message: "May increase simvastatin levels in the blood.", severity: "severe" },
    },
    "atenolol":   {
        "clonidine": { message: "May increase the risk of rebound hypertension.", severity: "moderate" },
        "nonsteroidal anti-inflammatory drugs": { message: "May decrease the antihypertensive effect of atenolol.", severity: "moderate" },
    },
    "atomoxetine": {
        "albuterol": { message: "May increase the risk of cardiovascular effects.", severity: "moderate" },
        "fluoxetine": { message: "May increase atomoxetine levels in the blood.", severity: "moderate" },
    },
    "atorvastatin": {
        "grapefruit juice": { message: "May increase atorvastatin levels in the blood.", severity: "moderate" },
        "gemfibrozil": { message: "May increase the risk of muscle damage.", severity: "severe" },
    },
    "atropine": {
        "potassium chloride": { message: "May increase the risk of gastrointestinal lesions.", severity: "moderate" },
        "antihistamines": { message: "May enhance anticholinergic effects.", severity: "moderate" },
    },
    "atovaquone": {
        "rifampin": { message: "May decrease atovaquone levels in the blood.", severity: "severe" },
        "metoclopramide": { message: "May decrease atovaquone levels in the blood.", severity: "moderate" },
    },
    "azathioprine": {
        "allopurinol": { message: "May increase azathioprine levels in the blood.", severity: "severe" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "azelastine": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "moderate" },
        "cimetidine": { message: "May increase azelastine levels in the blood.", severity: "mild" },
    },
    "azithromycin": {
        "nelfinavir": { message: "May increase azithromycin levels in the blood.", severity: "moderate" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "baclofen": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "antihypertensive drugs": { message: "May enhance the hypotensive effect.", severity: "moderate" },
    },
    "balsalazide": {
        "digoxin": { message: "May decrease digoxin absorption.", severity: "moderate" },
        "heparin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "beclomethasone": {
        "ritonavir": { message: "May increase beclomethasone levels in the blood.", severity: "moderate" },
        "ketoconazole": { message: "May increase beclomethasone levels in the blood.", severity: "moderate" },
    },
    "benazepril": {
        "potassium supplements": { message: "May increase the risk of hyperkalemia.", severity: "severe" },
        "lithium": { message: "May increase lithium levels in the blood.", severity: "severe" },
    },
    "bendamustine": {
        "live vaccines": { message: "May increase the risk of infection.", severity: "severe" },
        "cimetidine": { message: "May increase bendamustine levels in the blood.", severity: "moderate" },
    },
    "benzonatate": {
        "cholinesterase inhibitors": { message: "May increase the risk of severe hypotension.", severity: "severe" },
    },
    "benztropine": {
        "antihistamines": { message: "May enhance anticholinergic effects.", severity: "moderate" },
        "phenothiazines": { message: "May enhance anticholinergic effects.", severity: "moderate" },
    },
    "betamethasone": {
        "aspirin": { message: "May increase the risk of gastrointestinal ulceration.", severity: "moderate" },
        "phenytoin": { message: "May decrease betamethasone levels in the blood.", severity: "moderate" },
    },
    "betaxolol": {
        "verapamil": { message: "May increase the risk of heart block.", severity: "severe" },
        "clonidine": { message: "May increase the risk of rebound hypertension.", severity: "moderate" },
    },
    "bethanechol": {
        "anticholinergics": { message: "May decrease the effectiveness of bethanechol.", severity: "moderate" },
    },
    "bexarotene": {
        "gemfibrozil": { message: "May increase bexarotene levels in the blood.", severity: "moderate" },
        "tamoxifen": { message: "May decrease the effectiveness of tamoxifen.", severity: "moderate" },
    },
    "bezafibrate": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
        "statins": { message: "May increase the risk of muscle damage.", severity: "severe" },
    },
    "bicalutamide": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
        "ketoconazole": { message: "May increase bicalutamide levels in the blood.", severity: "moderate" },
    },
    "bimatoprost": {
        "latanoprost": { message: "May decrease the effectiveness of both drugs.", severity: "moderate" },
        "travoprost": { message: "May decrease the effectiveness of both drugs.", severity: "moderate" },
    },
    "bisacodyl": {
        "antacids": { message: "May decrease the effectiveness of bisacodyl.", severity: "moderate" },
        "milk": { message: "May decrease the effectiveness of bisacodyl.", severity: "mild" },
    },
    "bisoprolol": {
        "verapamil": { message: "May increase the risk of heart block.", severity: "severe" },
        "clonidine": { message: "May increase the risk of rebound hypertension.", severity: "moderate" },
    },
    "bivalirudin": {
        "heparin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
    },
    "bleomycin": {
        "cisplatin": { message: "May increase the risk of lung toxicity.", severity: "severe" },
        "oxygen therapy": { message: "May increase the risk of lung toxicity.", severity: "severe" },
    },
    "bortezomib": {
        "green tea": { message: "May decrease the effectiveness of bortezomib.", severity: "moderate" },
        "St. John's Wort": { message: "May decrease bortezomib levels in the blood.", severity: "severe" },
    },
    "bosentan": {
        "cyclosporine": { message: "May decrease cyclosporine levels in the blood.", severity: "severe" },
        "sildenafil": { message: "May increase the risk of hypotension.", severity: "moderate" },
    },
    "brimonidine": {
        "antihypertensive drugs": { message: "May enhance the hypotensive effect.", severity: "moderate" },
        "cns depressants": { message: "May increase drowsiness and dizziness.", severity: "moderate" },
    },
    "brinzolamide": {
        "aspirin": { message: "May increase the risk of metabolic acidosis.", severity: "moderate" },
        "high-dose salicylates": { message: "May increase the risk of metabolic acidosis.", severity: "moderate" },
    },
    "bromocriptine": {
        "ergot alkaloids": { message: "May increase the risk of ergotism.", severity: "severe" },
        "macrolide antibiotics": { message: "May increase bromocriptine levels in the blood.", severity: "moderate" },
    },
    "budesonide": {
        "ketoconazole": { message: "May increase budesonide levels in the blood.", severity: "moderate" },
        "ritonavir": { message: "May increase budesonide levels in the blood.", severity: "moderate" },
    },
    "bumetanide": {
        "lithium": { message: "May increase lithium levels in the blood.", severity: "severe" },
        "digoxin": { message: "May increase the risk of digoxin toxicity.", severity: "moderate" },
    },
    "bupivacaine": {
        "class I antiarrhythmic drugs": { message: "May increase the risk of cardiac toxicity.", severity: "severe" },
        "cimetidine": { message: "May increase bupivacaine levels in the blood.", severity: "moderate" },
    },
    "buprenorphine": {
        "benzodiazepines": { message: "May increase the risk of respiratory depression.", severity: "severe" },
        "naltrexone": { message: "May cause opioid withdrawal symptoms.", severity: "severe" },
    },
    "bupropion": {
        "maois": { message: "May increase the risk of hypertensive crisis.", severity: "severe" },
        "alcohol": { message: "May increase the risk of seizures.", severity: "severe" },
    },
    "buspirone": {
        "maois": { message: "May increase the risk of hypertensive crisis.", severity: "severe" },
        "erythromycin": { message: "May increase buspirone levels in the blood.", severity: "moderate" },
    },
    "butalbital": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "maois": { message: "May increase the risk of hypertensive crisis.", severity: "severe" },
    },
    "butorphanol": {
        "benzodiazepines": { message: "May increase the risk of respiratory depression.", severity: "severe" },
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
    },
    "caffeine": {
        "ciprofloxacin": { message: "May increase caffeine levels in the blood.", severity: "moderate" },
        "ephedrine": { message: "May increase the risk of cardiovascular side effects.", severity: "moderate" },
    },
    "calcitriol": {
        "thiazide diuretics": { message: "May increase the risk of hypercalcemia.", severity: "moderate" },
        "digoxin": { message: "May increase the risk of digoxin toxicity.", severity: "moderate" },
    },
    "canagliflozin": {
        "diuretics": { message: "May increase the risk of dehydration and hypotension.", severity: "moderate" },
        "insulin": { message: "May increase the risk of hypoglycemia.", severity: "moderate" },
    },
    "candesartan": {
        "potassium supplements": { message: "May increase the risk of hyperkalemia.", severity: "severe" },
        "lithium": { message: "May increase lithium levels in the blood.", severity: "severe" },
    },
    "capecitabine": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "phenytoin": { message: "May increase phenytoin levels in the blood.", severity: "moderate" },
    },
    "capreomycin": {
        "aminoglycosides": { message: "May increase the risk of kidney damage.", severity: "severe" },
        "neuromuscular blocking agents": { message: "May enhance neuromuscular blockade.", severity: "moderate" },
    },
    "captopril": {
        "potassium supplements": { message: "May increase the risk of hyperkalemia.", severity: "severe" },
        "lithium": { message: "May increase lithium levels in the blood.", severity: "severe" },
    },
    "carbamazepine": {
        "warfarin": { message: "May decrease the effectiveness of warfarin.", severity: "moderate" },
        "oral contraceptives": { message: "May decrease the effectiveness of oral contraceptives.", severity: "severe" },
    },
    "carbidopa": {
        "maois": { message: "May cause hypertensive crisis.", severity: "severe" },
        "iron supplements": { message: "May decrease the absorption of carbidopa.", severity: "moderate" },
    },
    "carboplatin": {
        "aminoglycosides": { message: "May increase the risk of kidney damage.", severity: "severe" },
        "phenytoin": { message: "May decrease phenytoin levels in the blood.", severity: "moderate" },
    },
    "carvedilol": {
        "digoxin": { message: "May increase digoxin levels in the blood.", severity: "moderate" },
        "insulin": { message: "May mask signs of hypoglycemia.", severity: "moderate" },
    },
    "cefaclor": {
        "probenecid": { message: "May increase cefaclor levels in the blood.", severity: "moderate" },
    },
    "cefadroxil": {
        "probenecid": { message: "May increase cefadroxil levels in the blood.", severity: "moderate" },
    },
    "cefazolin": {
        "probenecid": { message: "May increase cefazolin levels in the blood.", severity: "moderate" },
    },
    "cefdinir": {
        "antacids": { message: "May decrease cefdinir absorption.", severity: "moderate" },
        "iron supplements": { message: "May decrease cefdinir absorption.", severity: "moderate" },
    },
    "cefepime": {
        "probenecid": { message: "May increase cefepime levels in the blood.", severity: "moderate" },
    },
    "cefixime": {
        "carbamazepine": { message: "May decrease cefixime levels in the blood.", severity: "moderate" },
    },
    "cefotaxime": {
        "probenecid": { message: "May increase cefotaxime levels in the blood.", severity: "moderate" },
    },
    "cefpodoxime": {
        "antacids": { message: "May decrease cefpodoxime absorption.", severity: "moderate" },
        "h2 blockers": { message: "May decrease cefpodoxime absorption.", severity: "moderate" },
    },
    "cefprozil": {
        "probenecid": { message: "May increase cefprozil levels in the blood.", severity: "moderate" },
    },
    "ceftazidime": {
        "chloramphenicol": { message: "May decrease the effectiveness of ceftazidime.", severity: "moderate" },
    },
    "ceftriaxone": {
        "calcium-containing solutions": { message: "May form precipitates in the lungs and kidneys.", severity: "severe" },
    },
    "cefuroxime": {
        "probenecid": { message: "May increase cefuroxime levels in the blood.", severity: "moderate" },
        "antacids": { message: "May decrease cefuroxime absorption.", severity: "moderate" },
    },
    "celecoxib": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "lithium": { message: "May increase lithium levels in the blood.", severity: "moderate" },
    },
    "cephalexin": {
        "probenecid": { message: "May increase cephalexin levels in the blood.", severity: "moderate" },
    },
    "cetirizine": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "moderate" },
        "theophylline": { message: "May increase theophylline levels in the blood.", severity: "mild" },
    },
    "chloramphenicol": {
        "phenytoin": { message: "May increase phenytoin levels in the blood.", severity: "moderate" },
        "oral hypoglycemics": { message: "May enhance the effect of oral hypoglycemics.", severity: "moderate" },
    },
    "chlordiazepoxide": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "opioids": { message: "May increase the risk of respiratory depression.", severity: "severe" },
    },
    "chloroquine": {
        "antacids": { message: "May decrease chloroquine absorption.", severity: "moderate" },
        "mefloquine": { message: "May increase the risk of seizures.", severity: "severe" },
    },
    "chlorpheniramine": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "moderate" },
        "maois": { message: "May prolong and intensify anticholinergic effects.", severity: "moderate" },
    },
    "chlorpromazine": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "antihypertensive drugs": { message: "May enhance the hypotensive effect.", severity: "moderate" },
    },
    "chlorthalidone": {
        "lithium": { message: "May increase lithium levels in the blood.", severity: "severe" },
        "digoxin": { message: "May increase the risk of digoxin toxicity.", severity: "moderate" },
    },
    "cholestyramine": {
        "thyroid hormones": { message: "May decrease thyroid hormone absorption.", severity: "moderate" },
        "warfarin": { message: "May decrease warfarin absorption.", severity: "moderate" },
    },
    "ciclesonide": {
        "ketoconazole": { message: "May increase ciclesonide levels in the blood.", severity: "moderate" },
    },
    "cilostazol": {
        "aspirin": { message: "May increase the risk of bleeding.", severity: "moderate" },
        "erythromycin": { message: "May increase cilostazol levels in the blood.", severity: "moderate" },
    },
    "cimetidine": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
        "theophylline": { message: "May increase theophylline levels in the blood.", severity: "moderate" },
    },
    "ciprofloxacin": {
        "theophylline": { message: "May increase theophylline levels in the blood.", severity: "severe" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "cisapride": {
        "ketoconazole": { message: "May increase the risk of QT interval prolongation.", severity: "severe" },
        "erythromycin": { message: "May increase the risk of QT interval prolongation.", severity: "severe" },
    },
    "citalopram": {
        "maois": { message: "May cause serotonin syndrome.", severity: "severe" },
        "nsaids": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "clarithromycin": {
        "simvastatin": { message: "May increase the risk of muscle damage.", severity: "severe" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "clindamycin": {
        "erythromycin": { message: "May decrease the effectiveness of both drugs.", severity: "moderate" },
    },
    "clobazam": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "opioids": { message: "May increase the risk of respiratory depression.", severity: "severe" },
    },
    "clomipramine": {
        "maois": { message: "May cause serotonin syndrome.", severity: "severe" },
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
    },
    "clonazepam": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "opioids": { message: "May increase the risk of respiratory depression.", severity: "severe" },
    },
    "clonidine": {
        "beta-blockers": { message: "May cause rebound hypertension.", severity: "severe" },
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "moderate" },
    },
    "clopidogrel": {
        "aspirin": { message: "May increase the risk of bleeding.", severity: "moderate" },
        "omeprazole": { message: "May decrease the effectiveness of clopidogrel.", severity: "severe" },
    },
    "clotrimazole": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "clozapine": {
        "carbamazepine": { message: "May decrease clozapine levels in the blood.", severity: "moderate" },
        "ciprofloxacin": { message: "May increase clozapine levels in the blood.", severity: "severe" },
    },
    "codeine": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "maois": { message: "May cause serotonin syndrome.", severity: "severe" },
    },
    "colchicine": {
        "clarithromycin": { message: "May increase colchicine levels in the blood.", severity: "severe" },
        "cyclosporine": { message: "May increase colchicine levels in the blood.", severity: "severe" },
    },
    "colesevelam": {
        "cyclosporine": { message: "May decrease cyclosporine absorption.", severity: "moderate" },
        "thyroid hormones": { message: "May decrease thyroid hormone absorption.", severity: "moderate" },
    },
    "colestipol": {
        "thyroid hormones": { message: "May decrease thyroid hormone absorption.", severity: "moderate" },
        "digoxin": { message: "May decrease digoxin absorption.", severity: "moderate" },
    },
    "colistin": {
        "aminoglycosides": { message: "May increase the risk of kidney damage.", severity: "severe" },
        "neuromuscular blocking agents": { message: "May enhance neuromuscular blockade.", severity: "moderate" },
    },
    "cortisone": {
        "nsaids": { message: "May increase the risk of gastrointestinal ulceration.", severity: "moderate" },
        "warfarin": { message: "May decrease the effectiveness of warfarin.", severity: "moderate" },
    },
    "cyclobenzaprine": {
        "maois": { message: "May cause serotonin syndrome.", severity: "severe" },
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
    },
    "cyclophosphamide": {
        "allopurinol": { message: "May increase the risk of bone marrow suppression.", severity: "severe" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "cyclosporine": {
        "grapefruit juice": { message: "May increase cyclosporine levels in the blood.", severity: "moderate" },
        "St. John's Wort": { message: "May decrease cyclosporine levels in the blood.", severity: "severe" },
    },
    "cyproheptadine": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "moderate" },
        "maois": { message: "May decrease the effectiveness of maois.", severity: "moderate" },
    },
    "dabigatran": {
        "ketoconazole": { message: "May increase dabigatran levels in the blood.", severity: "severe" },
        "rifampin": { message: "May decrease dabigatran levels in the blood.", severity: "severe" },
    },
    "dalteparin": {
        "aspirin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "nsaids": { message: "May increase the risk of bleeding.", severity: "severe" },
    },
    "danazol": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "insulin": { message: "May decrease insulin requirements.", severity: "moderate" },
    },
    "dantrolene": {
        "calcium channel blockers": { message: "May increase the risk of cardiovascular collapse.", severity: "severe" },
        "estrogens": { message: "May increase the risk of hepatotoxicity.", severity: "moderate" },
    },
    "dapagliflozin": {
        "diuretics": { message: "May increase the risk of dehydration and hypotension.", severity: "moderate" },
        "insulin": { message: "May increase the risk of hypoglycemia.", severity: "moderate" },
    },
    "dapsone": {
        "trimethoprim": { message: "May increase the risk of methemoglobinemia.", severity: "moderate" },
        "rifampin": { message: "May decrease dapsone levels in the blood.", severity: "moderate" },
    },
    "darifenacin": {
        "ketoconazole": { message: "May increase darifenacin levels in the blood.", severity: "moderate" },
        "anticholinergics": { message: "May enhance anticholinergic effects.", severity: "moderate" },
    },
    "darunavir": {
        "simvastatin": { message: "May increase the risk of muscle damage.", severity: "severe" },
        "St. John's Wort": { message: "May decrease darunavir levels in the blood.", severity: "severe" },
    },
    "dasabuvir": {
        "carbamazepine": { message: "May decrease dasabuvir levels in the blood.", severity: "severe" },
        "ethinyl estradiol": { message: "May increase the risk of ALT elevations.", severity: "severe" },
    },
    "daunorubicin": {
        "trastuzumab": { message: "May increase the risk of cardiotoxicity.", severity: "severe" },
        "cyclosporine": { message: "May increase daunorubicin levels in the blood.", severity: "moderate" },
    },
    "delavirdine": {
        "rifampin": { message: "May decrease delavirdine levels in the blood.", severity: "severe" },
        "simvastatin": { message: "May increase the risk of muscle damage.", severity: "severe" },
    },
    "demeclocycline": {
        "antacids": { message: "May decrease demeclocycline absorption.", severity: "moderate" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "desflurane": {
        "succinylcholine": { message: "May increase the risk of malignant hyperthermia.", severity: "severe" },
        "beta-blockers": { message: "May enhance the bradycardic effect.", severity: "moderate" },
    },
    "desipramine": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "cimetidine": { message: "May increase desipramine levels in the blood.", severity: "moderate" },
    },
    "desmopressin": {
        "carbamazepine": { message: "May decrease the effectiveness of desmopressin.", severity: "moderate" },
        "ssris": { message: "May increase the risk of hyponatremia.", severity: "moderate" },
    },
    "desogestrel": {
        "carbamazepine": { message: "May decrease the effectiveness of desogestrel.", severity: "severe" },
        "griseofulvin": { message: "May decrease the effectiveness of desogestrel.", severity: "moderate" },
    },
    "desvenlafaxine": {
        "maois": { message: "May cause serotonin syndrome.", severity: "severe" },
        "nsaids": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "dexamethasone": {
        "nsaids": { message: "May increase the risk of gastrointestinal ulceration.", severity: "moderate" },
        "warfarin": { message: "May decrease the effectiveness of warfarin.", severity: "moderate" },
    },
    "dexlansoprazole": {
        "atazanavir": { message: "May decrease atazanavir absorption.", severity: "severe" },
        "clopidogrel": { message: "May decrease the effectiveness of clopidogrel.", severity: "moderate" },
    },
    "dexmedetomidine": {
        "benzodiazepines": { message: "May enhance sedative effect.", severity: "moderate" },
        "beta-blockers": { message: "May enhance bradycardic effect.", severity: "moderate" },
    },
    "dextroamphetamine": {
        "maois": { message: "May cause hypertensive crisis.", severity: "severe" },
        "ssris": { message: "May increase the risk of serotonin syndrome.", severity: "severe" },
    },
    "dextromethorphan": {
        "maois": { message: "May cause serotonin syndrome.", severity: "severe" },
        "ssris": { message: "May increase the risk of serotonin syndrome.", severity: "moderate" },
    },
    "diazepam": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "opioids": { message: "May increase the risk of respiratory depression.", severity: "severe" },
    },
    "diclofenac": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "lithium": { message: "May increase lithium levels in the blood.", severity: "moderate" },
    },
    "dicyclomine": {
        "antacids": { message: "May decrease dicyclomine absorption.", severity: "moderate" },
        "antihistamines": { message: "May enhance anticholinergic effects.", severity: "moderate" },
    },
    "didanosine": {
        "allopurinol": { message: "May increase didanosine levels in the blood.", severity: "moderate" },
        "ribavirin": { message: "May increase the risk of lactic acidosis.", severity: "severe" },
    },
    "digoxin": {
        "amiodarone": { message: "May increase digoxin levels in the blood.", severity: "severe" },
        "verapamil": { message: "May increase digoxin levels in the blood.", severity: "severe" },
    },
    "dihydroergotamine": {
        "ssris": { message: "May increase the risk of serotonin syndrome.", severity: "severe" },
        "macrolide antibiotics": { message: "May increase dihydroergotamine levels in the blood.", severity: "severe" },
    },
    "diltiazem": {
        "simvastatin": { message: "May increase the risk of muscle damage.", severity: "moderate" },
        "cyclosporine": { message: "May increase cyclosporine levels in the blood.", severity: "moderate" },
    },
    "dimenhydrinate": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "moderate" },
        "maois": { message: "May enhance anticholinergic effects.", severity: "moderate" },
    },
    "diphenhydramine": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "maois": { message: "May enhance anticholinergic effects.", severity: "moderate" },
    },
    "dipyridamole": {
        "aspirin": { message: "May increase the risk of bleeding.", severity: "moderate" },
        "adenosine": { message: "May enhance the effect of adenosine.", severity: "moderate" },
    },
    "disopyramide": {
        "qtc prolonging drugs": {message: "May increase the risk of QT interval prolongation.", severity: "severe" },
        "anticholinergics": { message: "May enhance anticholinergic effects.", severity: "moderate" },
    },
    "disulfiram": {
        "alcohol": { message: "May cause severe nausea, vomiting, and flushing.", severity: "severe" },
        "metronidazole": { message: "May cause psychotic reactions.", severity: "severe" },
    },
    "dobutamine": {
        "beta-blockers": { message: "May decrease the effectiveness of dobutamine.", severity: "moderate" },
        "maois": { message: "May cause severe hypertension.", severity: "severe" },
    },
    "docetaxel": {
        "ketoconazole": { message: "May increase docetaxel levels in the blood.", severity: "severe" },
        "erythromycin": { message: "May increase docetaxel levels in the blood.", severity: "moderate" },
    },
    "dofetilide": {
        "verapamil": { message: "May increase dofetilide levels in the blood.", severity: "severe" },
        "hydrochlorothiazide": { message: "May increase the risk of QT interval prolongation.", severity: "severe" },
    },
    "dolasetron": {
        "qtc prolonging drugs": { message: "May increase the risk of QT interval prolongation.", severity: "severe" },
    },
    "domperidone": {
        "ketoconazole": { message: "May increase domperidone levels in the blood.", severity: "severe" },
        "erythromycin": { message: "May increase domperidone levels in the blood.", severity: "severe" },
    },
    "donepezil": {
        "ketoconazole": { message: "May increase donepezil levels in the blood.", severity: "moderate" },
        "paroxetine": { message: "May increase donepezil levels in the blood.", severity: "moderate" },
    },
    "dopamine": {
        "maois": { message: "May cause severe hypertension.", severity: "severe" },
        "phenytoin": { message: "May decrease the effectiveness of dopamine.", severity: "moderate" },
    },
    "doxazosin": {
        "pde5 inhibitors": { message: "May increase the risk of hypotension.", severity: "moderate" },
        "diuretics": { message: "May increase the risk of first-dose hypotension.", severity: "moderate" },
    },
    "doxepin": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "cimetidine": { message: "May increase doxepin levels in the blood.", severity: "moderate" },
    },
    "doxorubicin": {
        "cyclosporine": { message: "May increase doxorubicin levels in the blood.", severity: "severe" },
        "paclitaxel": { message: "May increase doxorubicin levels in the blood.", severity: "moderate" },
    },
    "doxycycline": {
        "antacids": { message: "May decrease doxycycline absorption.", severity: "moderate" },
        "carbamazepine": { message: "May decrease doxycycline levels in the blood.", severity: "moderate" },
    },
    "dronabinol": {
        "disulfiram": { message: "May cause a disulfiram-like reaction.", severity: "moderate" },
        "ssris": { message: "May increase the risk of mania or hypomania.", severity: "moderate" },
    },
    "dronedarone": {
        "simvastatin": { message: "May increase the risk of muscle damage.", severity: "severe" },
        "digoxin": { message: "May increase digoxin levels in the blood.", severity: "severe" },
    },
    "droperidol": {
        "qtc prolonging drugs": { message: "May increase the risk of QT interval prolongation.", severity: "severe" },
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
    },
    "duloxetine": {
        "maois": { message: "May cause serotonin syndrome.", severity: "severe" },
        "nsaids": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "dutasteride": {
        "ketoconazole": { message: "May increase dutasteride levels in the blood.", severity: "moderate" },
        "ritonavir": { message: "May increase dutasteride levels in the blood.", severity: "moderate" },
    },
    "edoxaban": {
        "rifampin": { message: "May decrease edoxaban levels in the blood.", severity: "severe" },
        "aspirin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "efavirenz": {
        "voriconazole": { message: "May decrease voriconazole levels in the blood.", severity: "severe" },
        "oral contraceptives": { message: "May decrease the effectiveness of oral contraceptives.", severity: "moderate" },
    },
    "eletriptan": {
        "ssris": { message: "May increase the risk of serotonin syndrome.", severity: "severe" },
        "propranolol": { message: "May increase eletriptan levels in the blood.", severity: "moderate" },
    },
    "eltrombopag": {
        "polyvalent cations": { message: "May decrease eltrombopag absorption.", severity: "moderate" },
        "rosuvastatin": { message: "May increase rosuvastatin levels in the blood.", severity: "moderate" },
    },
    "empagliflozin": {
        "diuretics": { message: "May increase the risk of dehydration and hypotension.", severity: "moderate" },
        "insulin": { message: "May increase the risk of hypoglycemia.", severity: "moderate" },
    },
    "enalapril": {
        "potassium supplements": { message: "May increase the risk of hyperkalemia.", severity: "severe" },
        "lithium": { message: "May increase lithium levels in the blood.", severity: "severe" },
    },
    "enoxaparin": {
        "aspirin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "nsaids": { message: "May increase the risk of bleeding.", severity: "severe" },
    },
    "entacapone": {
        "maois": { message: "May cause hypertensive crisis.", severity: "severe" },
        "iron supplements": { message: "May decrease entacapone absorption.", severity: "moderate" },
    },
    "entecavir": {
        "drugs eliminated by renal excretion": { message: "May increase levels of drugs eliminated by renal excretion.", severity: "moderate" },
    },
    "epinephrine": {
        "beta-blockers": { message: "May cause severe hypertension and bradycardia.", severity: "severe" },
        "tricyclic antidepressants": { message: "May cause severe hypertension.", severity: "severe" },
    },
    "eplerenone": {
        "ketoconazole": { message: "May increase eplerenone levels in the blood.", severity: "severe" },
        "potassium supplements": { message: "May increase the risk of hyperkalemia.", severity: "severe" },
    },
    "eprosartan": {
        "potassium supplements": { message: "May increase the risk of hyperkalemia.", severity: "severe" },
        "lithium": { message: "May increase lithium levels in the blood.", severity: "severe" },
    },
    "ergotamine": {
        "ssris": { message: "May increase the risk of serotonin syndrome.", severity: "severe" },
        "macrolide antibiotics": { message: "May increase ergotamine levels in the blood.", severity: "severe" },
    },
    "erlotinib": {
        "proton pump inhibitors": { message: "May decrease erlotinib absorption.", severity: "severe" },
        "smoking": { message: "May decrease erlotinib levels in the blood.", severity: "moderate" },
    },
    "ertapenem": {
        "valproic acid": { message: "May decrease valproic acid levels in the blood.", severity: "moderate" },
    },
    "erythromycin": {
        "simvastatin": { message: "May increase the risk of muscle damage.", severity: "severe" },
        "carbamazepine": { message: "May increase carbamazepine levels in the blood.", severity: "moderate" },
    },
    "escitalopram": {
        "maois": { message: "May cause serotonin syndrome.", severity: "severe" },
        "nsaids": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "eslicarbazepine": {
        "oral contraceptives": { message: "May decrease the effectiveness of oral contraceptives.", severity: "moderate" },
        "carbamazepine": { message: "May decrease eslicarbazepine levels in the blood.", severity: "moderate" },
    },
    "esmolol": {
        "verapamil": { message: "May cause severe bradycardia or heart block.", severity: "severe" },
        "digoxin": { message: "May increase the risk of bradycardia.", severity: "moderate" },
    },
    "esomeprazole": {
        "clopidogrel": { message: "May decrease the effectiveness of clopidogrel.", severity: "moderate" },
        "iron supplements": { message: "May decrease iron absorption.", severity: "moderate" },
    },
    "estazolam": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "ketoconazole": { message: "May increase estazolam levels in the blood.", severity: "moderate" },
    },
    "estradiol": {
        "carbamazepine": { message: "May decrease estradiol levels in the blood.", severity: "moderate" },
        "St. John's Wort": { message: "May decrease estradiol levels in the blood.", severity: "moderate" },
    },
    "eszopiclone": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "ketoconazole": { message: "May increase eszopiclone levels in the blood.", severity: "moderate" },
    },
    "etanercept": {
        "anakinra": { message: "May increase the risk of serious infections.", severity: "severe" },
        "live vaccines": { message: "May increase the risk of infection.", severity: "severe" },
    },
    "ethambutol": {
        "antacids": { message: "May decrease ethambutol absorption.", severity: "moderate" },
    },
    "ethinyl estradiol": {
        "carbamazepine": { message: "May decrease the effectiveness of ethinyl estradiol.", severity: "severe" },
        "rifampin": { message: "May decrease the effectiveness of ethinyl estradiol.", severity: "severe" },
    },
    "ethosuximide": {
        "isoniazid": { message: "May increase ethosuximide levels in the blood.", severity: "moderate" },
        "phenytoin": { message: "May decrease ethosuximide levels in the blood.", severity: "moderate" },
    },
    "etoposide": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
        "cyclosporine": { message: "May increase etoposide levels in the blood.", severity: "moderate" },
    },
    "etravirine": {
        "rifampin": { message: "May decrease etravirine levels in the blood.", severity: "severe" },
        "efavirenz": { message: "May decrease etravirine levels in the blood.", severity: "moderate" },
    },
    "everolimus": {
        "ketoconazole": { message: "May increase everolimus levels in the blood.", severity: "severe" },
        "rifampin": { message: "May decrease everolimus levels in the blood.", severity: "severe" },
    },
    "exemestane": {
        "ketoconazole": { message: "May increase exemestane levels in the blood.", severity: "moderate" },
        "rifampicin": { message: "May decrease exemestane levels in the blood.", severity: "moderate" },
    },
    "ezetimibe": {
        "cyclosporine": { message: "May increase ezetimibe levels in the blood.", severity: "moderate" },
        "fibrates": { message: "May increase the risk of gallstones.", severity: "moderate" },
    },
    "famciclovir": {
        "probenecid": { message: "May increase famciclovir levels in the blood.", severity: "moderate" },
    },
    "famotidine": {
        "atazanavir": { message: "May decrease atazanavir absorption.", severity: "moderate" },
    },
    "febuxostat": {
        "azathioprine": { message: "May increase azathioprine levels in the blood.", severity: "severe" },
        "theophylline": { message: "May increase theophylline levels in the blood.", severity: "moderate" },
    },
    "felodipine": {
        "grapefruit juice": { message: "May increase felodipine levels in the blood.", severity: "moderate" },
        "cimetidine": { message: "May increase felodipine levels in the blood.", severity: "moderate" },
    },
    "fenofibrate": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
        "statins": { message: "May increase the risk of muscle damage.", severity: "severe" },
    },
    "fentanyl": {
        "cimetidine": { message: "May increase fentanyl levels in the blood.", severity: "severe" },
        "ritonavir": { message: "May increase fentanyl levels in the blood.", severity: "severe" },
    },
    "fesoterodine": {
        "ketoconazole": { message: "May increase fesoterodine levels in the blood.", severity: "moderate" },
        "rifampicin": { message: "May decrease fesoterodine levels in the blood.", severity: "moderate" },
    },
    "finasteride": {
        "no significant interactions": { message: "No significant interactions are known.", severity: "mild" },
    },
    "flavoxate": {
        "anticholinergics": { message: "May enhance anticholinergic effects.", severity: "moderate" },
    },
    "flecainide": {
        "amiodarone": { message: "May increase flecainide levels in the blood.", severity: "severe" },
        "cimetidine": { message: "May increase flecainide levels in the blood.", severity: "moderate" },
    },
    "fluconazole": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "simvastatin": { message: "May increase the risk of muscle damage.", severity: "severe" },
    },
    "fluoxetine": {
        "maois": { message: "May cause serotonin syndrome.", severity: "severe" },
        "tramadol": { message: "May increase the risk of serotonin syndrome.", severity: "severe" },
    },
    "fluphenazine": {
        "antihypertensive drugs": { message: "May enhance the hypotensive effect.", severity: "moderate" },
        "levodopa": { message: "May decrease the effectiveness of levodopa.", severity: "moderate" },
    },
    "flurazepam": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "ketoconazole": { message: "May increase flurazepam levels in the blood.", severity: "moderate" },
    },
    "flurbiprofen": {
        "warf arin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "lithium": { message: "May increase lithium levels in the blood.", severity: "moderate" },
    },
    "flutamide": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "fluticasone": {
        "ritonavir": { message: "May increase fluticasone levels in the blood.", severity: "severe" },
        "ketoconazole": { message: "May increase fluticasone levels in the blood.", severity: "moderate" },
    },
    "fluvastatin": {
        "gemfibrozil": { message: "May increase the risk of muscle damage.", severity: "severe" },
        "cyclosporine": { message: "May increase fluvastatin levels in the blood.", severity: "moderate" },
    },
    "fluvoxamine": {
        "maois": { message: "May cause serotonin syndrome.", severity: "severe" },
        "theophylline": { message: "May increase theophylline levels in the blood.", severity: "severe" },
    },
    "fondaparinux": {
        "aspirin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "nsaids": { message: "May increase the risk of bleeding.", severity: "severe" },
    },
    "formoterol": {
        "beta-blockers": { message: "May decrease the effectiveness of formoterol.", severity: "moderate" },
        "qtc prolonging drugs": { message: "May increase the risk of QT interval prolongation.", severity: "moderate" },
    },
    "fosamprenavir": {
        "rifampin": { message: "May decrease fosamprenavir levels in the blood.", severity: "severe" },
        "simvastatin": { message: "May increase the risk of muscle damage.", severity: "severe" },
    },
    "foscarnet": {
        "pentamidine": { message: "May increase the risk of nephrotoxicity.", severity: "severe" },
        "cidofovir": { message: "May increase the risk of nephrotoxicity.", severity: "severe" },
    },
    "fosphenytoin": {
        "carbamazepine": { message: "May decrease fosphenytoin levels in the blood.", severity: "moderate" },
        "valproic acid": { message: "May decrease valproic acid levels in the blood.", severity: "moderate" },
    },
    "frovatriptan": {
        "ssris": { message: "May increase the risk of serotonin syndrome.", severity: "severe" },
        "maois": { message: "May increase the risk of serotonin syndrome.", severity: "severe" },
    },
    "fulvestrant": {
        "no significant interactions": { message: "No significant interactions are known.", severity: "mild" },
    },
    "furosemide": {
        "aminoglycosides": { message: "May increase the risk of ototoxicity.", severity: "severe" },
        "lithium": { message: "May increase lithium levels in the blood.", severity: "severe" },
    },
    "gabapentin": {
        "antacids": { message: "May decrease gabapentin absorption.", severity: "moderate" },
        "morphine": { message: "May increase gabapentin absorption.", severity: "moderate" },
    },
    "galantamine": {
        "ketoconazole": { message: "May increase galantamine levels in the blood.", severity: "moderate" },
        "paroxetine": { message: "May increase galantamine levels in the blood.", severity: "moderate" },
    },
    "ganciclovir": {
        "zidovudine": { message: "May increase the risk of hematologic toxicity.", severity: "severe" },
        "imipenem": { message: "May increase the risk of seizures.", severity: "severe" },
    },
    "gefitinib": {
        "rifampicin": { message: "May decrease gefitinib levels in the blood.", severity: "severe" },
        "proton pump inhibitors": { message: "May decrease gefitinib absorption.", severity: "moderate" },
    },
    "gemfibrozil": {
        "repaglinide": { message: "May increase repaglinide levels in the blood.", severity: "severe" },
        "statins": { message: "May increase the risk of muscle damage.", severity: "severe" },
    },
    "gentamicin": {
        "furosemide": { message: "May increase the risk of ototoxicity.", severity: "severe" },
        "neuromuscular blocking agents": { message: "May enhance neuromuscular blockade.", severity: "moderate" },
    },
    "glimepiride": {
        "fluconazole": { message: "May increase glimepiride levels in the blood.", severity: "moderate" },
        "beta-blockers": { message: "May mask signs of hypoglycemia.", severity: "moderate" },
    },
    "glipizide": {
        "fluconazole": { message: "May increase glipizide levels in the blood.", severity: "moderate" },
        "beta-blockers": { message: "May mask signs of hypoglycemia.", severity: "moderate" },
    },
    "glyburide": {
        "fluconazole": { message: "May increase glyburide levels in the blood.", severity: "moderate" },
        "beta-blockers": { message: "May mask signs of hypoglycemia.", severity: "moderate" },
    },
    "granisetron": {
        "qtc prolonging drugs": { message: "May increase the risk of QT interval prolongation.", severity: "moderate" },
    },
    "griseofulvin": {
        "oral contraceptives": { message: "May decrease the effectiveness of oral contraceptives.", severity: "moderate" },
        "warfarin": { message: "May decrease the effectiveness of warfarin.", severity: "moderate" },
    },
    "guanfacine": {
        "cns depressants": { message: "May enhance CNS depression.", severity: "moderate" },
        "antihypertensive drugs": { message: "May enhance the hypotensive effect.", severity: "moderate" },
    },
    "haloperidol": {
        "qtc prolonging drugs": { message: "May increase the risk of QT interval prolongation.", severity: "severe" },
        "carbamazepine": { message: "May decrease haloperidol levels in the blood.", severity: "moderate" },
    },
    "heparin": {
        "aspirin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "nsaids": { message: "May increase the risk of bleeding.", severity: "severe" },
    },
    "hydralazine": {
        "diazoxide": { message: "May enhance the hypotensive effect.", severity: "moderate" },
        "beta-blockers": { message: "May enhance the hypotensive effect.", severity: "moderate" },
    },
    "hydrochlorothiazide": {
        "lithium": { message: "May increase lithium levels in the blood.", severity: "severe" },
        "digoxin": { message: "May increase the risk of digoxin toxicity.", severity: "moderate" },
    },
    "hydrocodone": {
        "cns depressants": { message: "May enhance CNS depression.", severity: "severe" },
        "cyt ochrome P450 3A4 inhibitors": { message: "May increase hydrocodone levels in the blood.", severity: "moderate" },
    },
    "hydrocortisone": {
        "nsaids": { message: "May increase the risk of gastrointestinal ulceration.", severity: "moderate" },
        "warfarin": { message: "May decrease the effectiveness of warfarin.", severity: "moderate" },
    },
    "hydromorphone": {
        "cns depressants": { message: "May enhance CNS depression.", severity: "severe" },
        "maois": { message: "May cause serotonin syndrome.", severity: "severe" },
    },
    "hydroxychloroquine": {
        "digoxin": { message: "May increase digoxin levels in the blood.", severity: "moderate" },
        "antacids": { message: "May decrease hydroxychloroquine absorption.", severity: "moderate" },
    },
    "hydroxyzine": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "anticholinergics": { message: "May enhance anticholinergic effects.", severity: "moderate" },
    },
    "ibandronate": {
        "calcium supplements": { message: "May decrease ibandronate absorption.", severity: "moderate" },
        "nsaids": { message: "May increase the risk of gastrointestinal side effects.", severity: "moderate" },
    },
    "ibuprofen": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "aspirin": { message: "May decrease the cardioprotective effects of aspirin.", severity: "moderate" },
    },
    "imatinib": {
        "simvastatin": { message: "May increase the risk of muscle damage.", severity: "severe" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "imipenem": {
        "ganciclovir": { message: "May increase the risk of seizures.", severity: "severe" },
        "valproic acid": { message: "May decrease valproic acid levels in the blood.", severity: "moderate" },
    },
    "imipramine": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "cimetidine": { message: "May increase imipramine levels in the blood.", severity: "moderate" },
    },
    "indapamide": {
        "lithium": { message: "May increase lithium levels in the blood.", severity: "severe" },
        "digoxin": { message: "May increase the risk of digoxin toxicity.", severity: "moderate" },
    },
    "indomethacin": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "lithium": { message: "May increase lithium levels in the blood.", severity: "moderate" },
    },
    "insulin": {
        "beta-blockers": { message: "May mask signs of hypoglycemia.", severity: "moderate" },
        "alcohol": { message: "May increase the risk of hypoglycemia.", severity: "moderate" },
    },
    "irbesartan": {
        "potassium supplements": { message: "May increase the risk of hyperkalemia.", severity: "severe" },
        "lithium": { message: "May increase lithium levels in the blood.", severity: "severe" },
    },
    "irinotecan": {
        "ketoconazole": { message: "May increase irinotecan levels in the blood.", severity: "severe" },
        "St. John's Wort": { message: "May decrease irinotecan levels in the blood.", severity: "severe" },
    },
    "isoniazid": {
        "acetaminophen": { message: "May increase the risk of liver damage.", severity: "severe" },
        "carbamazepine": { message: "May increase carbamazepine levels in the blood.", severity: "moderate" },
    },
    "isosorbide": {
        "sildenafil": { message: "May cause severe hypotension.", severity: "severe" },
        "alcohol": { message: "May increase the risk of hypotension.", severity: "moderate" },
    },
    "itraconazole": {
        "simvastatin": { message: "May increase the risk of muscle damage.", severity: "severe" },
        "digoxin": { message: "May increase digoxin levels in the blood.", severity: "moderate" },
    },
    "ivabradine": {
        "diltiazem": { message: "May increase ivabradine levels in the blood.", severity: "severe" },
        "verapamil": { message: "May increase ivabradine levels in the blood.", severity: "severe" },
    },
    "ivermectin": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "ketamine": {
        "cns depressants": { message: "May enhance CNS depression.", severity: "severe" },
        "theophylline": { message: "May increase the risk of seizures.", severity: "severe" },
    },
    "ketoconazole": {
        "simvastatin": { message: "May increase the risk of muscle damage.", severity: "severe" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
    },
    "ketoprofen": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "methotrexate": { message: "May increase methotrexate levels in the blood.", severity: "severe" },
    },
    "ketorolac": {
        "aspirin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
    },
    "labetalol": {
        "verapamil": { message: "May cause severe bradycardia or heart block.", severity: "severe" },
        "cimetidine": { message: "May increase labetalol levels in the blood.", severity: "moderate" },
    },
    "lactulose": {
        "antacids": { message: "May decrease the effectiveness of lactulose.", severity: "moderate" },
    },
    "lamivudine": {
        "trimethoprim": { message: "May increase lamivudine levels in the blood.", severity: "moderate" },
        "zalcitabine": { message: "May decrease the effectiveness of both drugs.", severity: "moderate" },
    },
    "lamotrigine": {
        "valproic acid": { message: "May increase lamotrigine levels in the blood.", severity: "severe" },
        "carbamazepine": { message: "May decrease lamotrigine levels in the blood.", severity: "moderate" },
    },
    "lansoprazole": {
        "atazanavir": { message: "May decrease atazanavir absorption.", severity: "severe" },
        "clopidogrel": { message: "May decrease the effectiveness of clopidogrel.", severity: "moderate" },
    },
    "lanthanum": {
        "quinolone antibiotics": { message: "May decrease antibiotic absorption.", severity: "moderate" },
        "levothyroxine": { message: "May decrease levothyroxine absorption.", severity: "moderate" },
    },
    "lapatinib": {
        "ketoconazole": { message: "May increase lapatinib levels in the blood.", severity: "severe" },
        "dexamethasone": { message: "May decrease lapatinib levels in the blood.", severity: "moderate" },
    },
    "latanoprost": {
        "thimerosal": { message: "May decrease the effectiveness of latanoprost.", severity: "moderate" },
    },
    "leflunomide": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
        "methotrexate": { message: "May increase the risk of liver damage.", severity: "severe" },
    },
    "letrozole": {
        "tamoxifen": { message: "May decrease the effectiveness of letrozole.", severity: "moderate" },
    },
    "leuprolide": {
        "qtc prolonging drugs": { message: "May increase the risk of QT interval prolongation.", severity: "moderate" },
    },
    "levalbuterol": {
        "beta-blockers": { message: "May decrease the effectiveness of levalbuterol.", severity: "moderate" },
        "diuretics": { message: "May increase the risk of hypokalemia.", severity: "moderate" },
    },
    "levetiracetam": {
        "carbamazepine": { message: "May decrease leve tiracetam levels in the blood.", severity: "moderate" },
    },
    "levobunolol": {
        "verapamil": { message: "May cause severe bradycardia or heart block.", severity: "severe" },
        "epinephrine": { message: "May cause severe hypertension.", severity: "severe" },
    },
    "levocetirizine": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "moderate" },
    },
    "levofloxacin": {
        "antacids": { message: "May decrease levofloxacin absorption.", severity: "moderate" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "levothyroxine": {
        "calcium supplements": { message: "May decrease levothyroxine absorption.", severity: "moderate" },
        "iron supplements": { message: "May decrease levothyroxine absorption.", severity: "moderate" },
    },
    "lidocaine": {
        "cimetidine": { message: "May increase lidocaine levels in the blood.", severity: "moderate" },
        "beta-blockers": { message: "May increase lidocaine levels in the blood.", severity: "moderate" },
    },
    "linagliptin": {
        "rifampin": { message: "May decrease linagliptin levels in the blood.", severity: "moderate" },
    },
    "linezolid": {
        "ssris": { message: "May increase the risk of serotonin syndrome.", severity: "severe" },
        "maois": { message: "May increase the risk of serotonin syndrome.", severity: "severe" },
    },
    "lisinopril": {
        "potassium supplements": { message: "May increase the risk of hyperkalemia.", severity: "severe" },
        "lithium": { message: "May increase lithium levels in the blood.", severity: "severe" },
    },
    "lithium": {
        "nsaids": { message: "May increase lithium levels in the blood.", severity: "severe" },
        "ace inhibitors": { message: "May increase lithium levels in the blood.", severity: "severe" },
    },
    "loperamide": {
        "qtc prolonging drugs": { message: "May increase the risk of QT interval prolongation.", severity: "moderate" },
    },
    "loratadine": {
        "ketoconazole": { message: "May increase loratadine levels in the blood.", severity: "moderate" },
    },
    "lorazepam": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "opioids": { message: "May increase the risk of respiratory depression.", severity: "severe" },
    },
    "losartan": {
        "potassium supplements": { message: "May increase the risk of hyperkalemia.", severity: "severe" },
        "lithium": { message: "May increase lithium levels in the blood.", severity: "severe" },
    },
    "lovastatin": {
        "gemfibrozil": { message: "May increase the risk of muscle damage.", severity: "severe" },
        "grapefruit juice": { message: "May increase lovastatin levels in the blood.", severity: "moderate" },
    },
    "loxapine": {
        "cns depressants": { message: "May enhance CNS depression.", severity: "moderate" },
        "anticholinergics": { message: "May enhance anticholinergic effects.", severity: "moderate" },
    },
    "lurasidone": {
        "ketoconazole": { message: "May increase lurasidone levels in the blood.", severity: "severe" },
        "rifampin": { message: "May decrease lurasidone levels in the blood.", severity: "severe" },
    },
    "magnesium hydroxide": {
        "tetracyclines": { message: "May decrease tetracycline absorption.", severity: "moderate" },
        "iron supplements": { message: "May decrease iron absorption.", severity: "moderate" },
    },
    "magnesium sulfate": {
        "calcium channel blockers": { message: "May enhance the hypotensive effect.", severity: "moderate" },
        "neuromuscular blocking agents": { message: "May enhance neuromuscular blockade.", severity: "moderate" },
    },
    "maraviroc": {
        "ketoconazole": { message: "May increase maraviroc levels in the blood.", severity: "moderate" },
        "rifampin": { message: "May decrease maraviroc levels in the blood.", severity: "severe" },
    },
    "meclizine": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "moderate" },
    },
    "medroxyprogesterone": {
        "aminoglutethimide": { message: "May decrease medroxyprogesterone levels in the blood.", severity: "moderate" },
    },
    "mefloquine": {
        "qtc prolonging drugs": { message: "May increase the risk of QT interval prolongation.", severity: "severe" },
        "ketoconazole": { message: "May increase mefloquine levels in the blood.", severity: "moderate" },
    },
    "megestrol": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "meloxicam": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "lithium": { message: "May increase lithium levels in the blood.", severity: "moderate" },
    },
    "melphalan": {
        "cyclosporine": { message: "May increase the risk of kidney damage.", severity: "severe" },
        "nalidixic acid": { message: "May increase the risk of severe skin reactions.", severity: "severe" },
    },
    "memantine": {
        "carbonic anhydrase inhibitors": { message: "May increase memantine levels in the blood.", severity: "moderate" },
        "nmda antagonists": { message: "May enhance the adverse/toxic effect of Memantine.", severity: "moderate" },
    },
    "meperidine": {
        "maois": { message: "May cause serotonin syndrome.", severity: "severe" },
        "cimetidine": { message: "May increase meperidine levels in the blood.", severity: "moderate" },
    },
    "meropenem": {
        "valproic acid": { message: "May decrease valproic acid levels in the blood.", severity: "severe" },
    },
    "mesalamine": {
        "nephrotoxic agents": { message: "May increase the risk of kidney damage.", severity: "moderate" },
    },
    "metformin": {
        "cimetidine": { message: "May increase metformin levels in the blood.", severity: "moderate" },
        "contrast media": { message: "May increase the risk of lactic acidosis.", severity: "severe" },
    },
    "methadone": {
        "cns depressants": { message: "May enhance CNS depression.", severity: "severe" },
        "qtc prolonging drugs": { message: "May increase the risk of QT interval prolongation.", severity: "severe" },
    },
    "methimazole": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "methotrexate": {
        "nsaids": { message: "May increase methotrexate levels in the blood.", severity: "severe" },
        "trimethoprim": { message: "May increase the risk of bone marrow suppression.", severity: "severe" },
    },
    "methylphenidate": {
        "maois": { message: "May cause hypertensive crisis.", severity: "severe" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "methylprednisolone": {
        "nsaids": { message: "May increase the risk of gastrointestinal ulceration.", severity: "moderate" },
        "warfarin": { message: "May decrease the effectiveness of warfarin.", severity: "moderate" },
    },
    "metoclopramide": {
        "levodopa": { message: "May decrease the effectiveness of levodopa.", severity: "moderate" },
        "cyclosporine": { message: "May increase cyclosporine levels in the blood.", severity: "moderate" },
    },
    "metolazone": {
        "lithium": { message: "May increase lithium levels in the blood.", severity: "severe" },
        "digoxin": { message: "May increase the risk of digoxin toxicity.", severity: "moderate" },
    },
    "metoprolol": {
        "verapamil": { message: "May cause severe bradycardia or heart block.", severity: "severe" },
        "cimetidine": { message: "May increase metoprolol levels in the blood.", severity: "moderate" },
    },
    "metronidazole": {
        "alcohol": { message: "May cause disulfiram-like reaction.", severity: "severe" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
    },
    "miconazole": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
    },
    "midazolam": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "ketoconazole": { message: "May increase midazolam levels in the blood.", severity: "severe" },
    },
    "mifepristone": {
        "ketoconazole": { message: "May increase mifepristone levels in the blood.", severity: "moderate" },
    },
    "miglitol": {
        "digestive enzyme supplements": { message: "May decrease the effectiveness of miglitol.", severity: "moderate" },
    },
    "milnacipran": {
        "maois": { message: "May cause serotonin syndrome.", severity: "severe" },
        "tramadol": { message: "May increase the risk of serotonin syndrome.", severity: "severe" },
    },
    "minocycline": {
        "oral contraceptives": { message: "May decrease the effectiveness of oral contraceptives.", severity: "moderate" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "mirtazapine": {
        "maois": { message: "May cause serotonin syndrome.", severity: "severe" },
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
    },
    "misoprostol": {
        "nsaids": { message: "May decrease the effectiveness of misoprostol.", severity: "moderate" },
    },
    "modafinil": {
        "oral contraceptives": { message: "May decrease the effectiveness of oral contraceptives.", severity: "moderate" },
        "cyclosporine": { message: "May decrease cyclosporine levels in the blood.", severity: "moderate" },
    },
    "moexipril": {
        "potassium supplements": { message: "May increase the risk of hyperkalemia.", severity: "severe" },
        "lithium": { message: "May increase lithium levels in the blood.", severity: "severe" },
    },
    "mometasone": {
        "ketoconazole": { message: "May increase mometasone levels in the blood.", severity: "moderate" },
    },
    "montelukast": {
        "phenobarbital": { message: "May decrease montelukast levels in the blood.", severity: "moderate" },
    },
    "morphine": {
        "cns depressants": { message: "May enhance CNS depression.", severity: "severe" },
        "cimetidine": { message: "May increase morphine levels in the blood.", severity: "moderate" },
    },
    "moxifloxacin": {
        "antacids": { message: "May decrease moxifloxacin absorption.", severity: "moderate" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "moxonidine": {
        "tricyclic antidepressants": { message: "May decrease the effectiveness of moxonidine.", severity: "moderate" },
    },
    "mycophenolate": {
        "antacids": { message: "May decrease mycophenolate absorption.", severity: "moderate" },
        "cholestyramine": { message: "May decrease mycophenolate absorption.", severity: "moderate" },
    },
    "nabumetone": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "methotrexate": { message: "May increase methotrexate levels in the blood.", severity: "severe" },
    },
    "nadolol": {
        "verapamil": { message: "May cause severe bradycardia or heart block.", severity: "severe" },
        "cimetidine": { message: "May increase nadolol levels in the blood.", severity: "moderate" },
    },
    "naftifine": {
        "no significant interactions": { message: "No significant interactions are known.", severity: "mild" },
    },
    "naloxone": {
        "opioids": { message: "May precipitate withdrawal in opioid-dependent individuals.", severity: "severe" },
    },
    "naltrexone": {
        "opioids": { message: "May precipitate withdrawal in opioid-dependent individuals.", severity: "severe" },
    },
    "naproxen": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "lithium": { message: "May increase lithium levels in the blood.", severity: "moderate" },
    },
    "naratriptan": {
        "ssris": { message: "May increase the risk of serotonin syndrome.", severity: "severe" },
        "ergotamine": { message: "May cause vasospastic reactions.", severity: "severe" },
    },
    "nateglinide": {
        "gemfibrozil": { message: "May increase nateglinide levels in the blood.", severity: "moderate" },
        "beta-blockers": { message: "May mask signs of hypoglycemia.", severity: "moderate" },
    },
    "nefazodone": {
        "simvastatin": { message: "May increase the risk of muscle damage.", severity: "severe" },
        "triazolam": { message: "May increase triazolam levels in the blood.", severity: "severe" },
    },
    "nelfinavir": {
        "simvastatin": { message: "May increase the risk of muscle damage.", severity: "severe" },
        "rifampin": { message: "May decrease nelfinavir levels in the blood.", severity: "severe" },
    },
    "neomycin": {
        "digoxin": { message: "May decrease digoxin absorption.", severity: "moderate" },
        "warfarin": { message: "May decrease the effectiveness of warfarin.", severity: "moderate" },
    },
    "neostigmine": {
        "atropine": { message: "May decrease the effectiveness of neostigmine.", severity: "moderate" },
        "succinylcholine": { message: "May prolong neuromuscular blockade.", severity: "moderate" },
    },
    "nevirapine": {
        "ketoconazole": { message: "May decrease ketoconazole levels in the blood.", severity: "moderate" },
        "oral contraceptives": { message: "May decrease the effectiveness of oral contraceptives.", severity: "moderate" },
    },
    "niacin": {
        "simvastatin": { message: "May increase the risk of muscle damage.", severity: "severe" },
        "aspirin": { message: "May increase the risk of flushing.", severity: "moderate" },
    },
    "nicardipine": {
        "cyclosporine": { message: "May increase cyclosporine levels in the blood.", severity: "moderate" },
        "cimetidine": { message: "May increase nic ardipine levels in the blood.", severity: "moderate" },
    },
    "nifedipine": {
        "cimetidine": { message: "May increase nifedipine levels in the blood.", severity: "moderate" },
        "grapefruit juice": { message: "May increase nifedipine levels in the blood.", severity: "moderate" },
    },
    "nilotinib": {
        "ketoconazole": { message: "May increase nilotinib levels in the blood.", severity: "severe" },
        "rifampin": { message: "May decrease nilotinib levels in the blood.", severity: "severe" },
    },
    "nimodipine": {
        "cimetidine": { message: "May increase nimodipine levels in the blood.", severity: "moderate" },
        "phenytoin": { message: "May decrease nimodipine levels in the blood.", severity: "moderate" },
    },
    "nitrofurantoin": {
        "probenecid": { message: "May decrease nitrofurantoin excretion.", severity: "moderate" },
        "antacids": { message: "May decrease nitrofurantoin absorption.", severity: "moderate" },
    },
    "nitroglycerin": {
        "sildenafil": { message: "May cause severe hypotension.", severity: "severe" },
        "heparin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "nitroprusside": {
        "sildenafil": { message: "May cause severe hypotension.", severity: "severe" },
    },
    "nizatidine": {
        "ketoconazole": { message: "May decrease ketoconazole absorption.", severity: "moderate" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "norethindrone": {
        "carbamazepine": { message: "May decrease the effectiveness of norethindrone.", severity: "severe" },
        "rifampin": { message: "May decrease the effectiveness of norethindrone.", severity: "severe" },
    },
    "norfloxacin": {
        "antacids": { message: "May decrease norfloxacin absorption.", severity: "moderate" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "nortriptyline": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "cimetidine": { message: "May increase nortriptyline levels in the blood.", severity: "moderate" },
    },
    "nystatin": {
        "no significant interactions": { message: "No significant interactions are known.", severity: "mild" },
    },
    "ofloxacin": {
        "antacids": { message: "May decrease ofloxacin absorption.", severity: "moderate" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "olanzapine": {
        "carbamazepine": { message: "May decrease olanzapine levels in the blood.", severity: "moderate" },
        "fluvoxamine": { message: "May increase olanzapine levels in the blood.", severity: "moderate" },
    },
    "olmesartan": {
        "potassium supplements": { message: "May increase the risk of hyperkalemia.", severity: "severe" },
        "lithium": { message: "May increase lithium levels in the blood.", severity: "severe" },
    },
    "olopatadine": {
        "cns depressants": { message: "May enhance CNS depression.", severity: "moderate" },
    },
    "omeprazole": {
        "clopidogrel": { message: "May decrease the effectiveness of clopidogrel.", severity: "severe" },
        "digoxin": { message: "May increase digoxin levels in the blood.", severity: "moderate" },
    },
    "ondansetron": {
        "tramadol": { message: "May decrease the effectiveness of tramadol.", severity: "moderate" },
        "qtc prolonging drugs": { message: "May increase the risk of QT interval prolongation.", severity: "moderate" },
    },
    "orlistat": {
        "cyclosporine": { message: "May decrease cyclosporine absorption.", severity: "severe" },
        "levothyroxine": { message: "May decrease levothyroxine absorption.", severity: "moderate" },
    },
    "oseltamivir": {
        "live influenza vaccine": { message: "May decrease the effectiveness of the vaccine.", severity: "moderate" },
    },
    "oxaprozin": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "methotrexate": { message: "May increase methotrexate levels in the blood.", severity: "severe" },
    },
    "oxazepam": {
        "alcohol": { message: "May increase drowsiness and dizziness.", severity: "severe" },
        "opioids": { message: "May increase the risk of respiratory depression.", severity: "severe" },
    },
    "oxcarbazepine": {
        "oral contraceptives": { message: "May decrease the effectiveness of oral contraceptives.", severity: "severe" },
        "phenytoin": { message: "May increase phenytoin levels in the blood.", severity: "moderate" },
    },
    "oxybutynin": {
        "potassium chloride": { message: "May increase the risk of gastrointestinal ulceration.", severity: "moderate" },
        "anticholinergics": { message: "May enhance anticholinergic effects.", severity: "moderate" },
    },
    "oxycodone": {
        "cns depressants": { message: "May enhance CNS depression.", severity: "severe" },
        "cyt ochrome P450 3A4 inhibitors": { message: "May increase oxycodone levels in the blood.", severity: "moderate" },
    },
    "oxymetazoline": {
        "maois": { message: "May cause severe hypertension.", severity: "severe" },
        "beta-blockers": { message: "May decrease the effectiveness of beta-blockers.", severity: "moderate" },
    },
    "paclitaxel": {
        "ketoconazole": { message: "May increase paclitaxel levels in the blood.", severity: "severe" },
        "cisplatin": { message: "May increase the risk of peripheral neuropathy.", severity: "moderate" },
    },
    "paliperidone": {
        "carbamazepine": { message: "May decrease paliperidone levels in the blood.", severity: "moderate" },
        "levodopa": { message: "May decrease the effectiveness of levodopa.", severity: "moderate" },
    },
    "pantoprazole": {
        "clopidogrel": { message: "May decrease the effectiveness of clopidogrel.", severity: "moderate" },
        "methotrexate": { message: "May increase methotrexate levels in the blood.", severity: "moderate" },
    },
    "paroxetine": {
        "tamoxifen": { message: "May decrease the effectiveness of tamoxifen.", severity: "severe" },
        "nsaids": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "penicillin v": {
        "probenecid": { message: "May increase penicillin levels in the blood.", severity: "moderate" },
        "methotrexate": { message: "May increase methotrexate levels in the blood.", severity: "moderate" },
    },
    "pentoxifylline": {
        "theophylline": { message: "May increase theophylline levels in the blood.", severity: "moderate" },
        "warfarin": { message: "May increase the risk of bleeding.", severity: "moderate" },
    },
    "perindopril": {
        "potassium supplements": { message: "May increase the risk of hyperkalemia.", severity: "severe" },
        "lithium": { message: "May increase lithium levels in the blood.", severity: "severe" },
    },
    "phenazopyridine": {
        "ciprofloxacin": { message: "May interfere with urine color test results.", severity: "mild" },
    },
    "phenelzine": {
        "ssris": { message: "May cause serotonin syndrome.", severity: "severe" },
        "sympathomimetics": { message: "May cause severe hypertension.", severity: "severe" },
    },
    "phenobarbital": {
        "valproic acid": { message: "May decrease valproic acid levels in the blood.", severity: "moderate" },
        "warfarin": { message: "May decrease the effectiveness of warfarin.", severity: "moderate" },
    },
    "phentermine": {
        "ssris": { message: "May increase the risk of serotonin syndrome.", severity: "severe" },
        "maois": { message: "May cause severe hypertension.", severity: "severe" },
    },
    "phenytoin": {
        "warfarin": { message: "May increase or decrease warfarin levels in the blood.", severity: "severe" },
        "carbamazepine": { message: "May decrease phenytoin levels in the blood.", severity: "moderate" },
    },
    "pioglitazone": {
        "gemfibrozil": { message: "May increase pioglitazone levels in the blood.", severity: "moderate" },
        "rifampin": { message: "May decrease pioglitazone levels in the blood.", severity: "moderate" },
    },
    "piroxicam": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "lithium": { message: "May increase lithium levels in the blood.", severity: "moderate" },
    },
    "potassium chloride": {
        "spironolactone": { message: "May increase the risk of hyperkalemia.", severity: "severe" },
        "ace inhibitors": { message: "May increase the risk of hyperkalemia.", severity: "severe" },
    },
    "pramipexole": {
        "cimetidine": { message: "May increase pramipexole levels in the blood.", severity: "moderate" },
        "cns depressants": { message: "May enhance CNS depression.", severity: "moderate" },
    },
    "prasugrel": {
        "warfarin": { message: "May increase the risk of bleeding.", severity: "severe" },
        "nsaids": { message: "May increase the risk of bleeding.", severity: "severe" },
    },
    "pravastatin": {
        "gemfibrozil": { message: "May increase the risk of muscle damage.", severity: "severe" },
        "cyclosporine": { message: "May increase pravastatin levels in the blood.", severity: "moderate" },
    },
    "prednisolone": {
        "nsaids": { message: "May increase the risk of gastrointestinal ulceration.", severity: "moderate" },
        "warfarin": { message: "May decrease the effectiveness of warfarin.", severity: "moderate" },
    },
    "prednisone": {
        "nsaids": { message: "May increase the risk of gastrointestinal ulcer.", severity: "severe" },
    },
};

const drugForm = document.getElementById('drug-form');
const drugInput = document.getElementById('drug-input');
const drugList = document.getElementById('drug-list');
const checkInteractionsBtn = document.getElementById('check-interactions');
const interactionsList = document.getElementById('interactions-list');

let drugs = [];

drugForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addDrug();
});

function addDrug() {
    const drug = drugInput.value.toLowerCase().trim();
    if (drug && !drugs.includes(drug)) {
        drugs.push(drug);
        updateDrugList();
        drugInput.value = '';
    }
    updateCheckInteractionsButton();
}

function removeDrug(drug) {
    drugs = drugs.filter(d => d !== drug);
    updateDrugList();
    updateCheckInteractionsButton();
}

function updateDrugList() {
    drugList.innerHTML = '';
    drugs.forEach(drug => {
        const drugItem = document.createElement('span');
        drugItem.className = 'drug-item';
        drugItem.textContent = drug;
        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-drug';
        removeBtn.textContent = '×';
        removeBtn.setAttribute('aria-label', `Remove ${drug}`);
        removeBtn.onclick = () => removeDrug(drug);
        
        drugItem.appendChild(removeBtn);
        drugList.appendChild(drugItem);
    });
}

function updateCheckInteractionsButton() {
    checkInteractionsBtn.disabled = drugs.length < 2;
}

checkInteractionsBtn.addEventListener('click', checkInteractions);

function checkInteractions() {
    const interactions = [];
    for (let i = 0; i < drugs.length; i++) {
        for (let j = i + 1; j < drugs.length; j++) {
            const drug1 = drugs[i];
            const drug2 = drugs[j];
            if (mockInteractions[drug1]?.[drug2]) {
                interactions.push({
                    drugs: `${capitalize(drug1)} + ${capitalize(drug2)}`,
                    message: mockInteractions[drug1][drug2].message,
                    severity: mockInteractions[drug1][drug2].severity,
                });
            } else if (mockInteractions[drug2]?.[drug1]) {
                interactions.push({
                    drugs:  `${capitalize(drug2)} + ${capitalize(drug1)}`,
                    message: mockInteractions[drug2][drug1].message,
                    severity: mockInteractions[drug2][drug1].severity,
                });
            }
        }
    }
    displayInteractions(interactions);
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function displayInteractions(interactions) {
    interactionsList.innerHTML = '';
    if (interactions.length > 0) {
        interactions.forEach(interaction => {
            const interactionItem = document.createElement('div');
            interactionItem.className = `interaction-item ${interaction.severity} fade-in`;
            interactionItem.innerHTML = `
                <strong>${interaction.drugs}:</strong> ${interaction.message}
                <span class="severity">Severity: ${capitalize(interaction.severity)}</span>
            `;
            interactionsList.appendChild(interactionItem);
        });
    } else {
        const noInteractions = document.createElement('p');
        noInteractions.textContent = 'No interactions found or not yet checked.';
        noInteractions.className = 'fade-in';
        interactionsList.appendChild(noInteractions);
    }
}

updateCheckInteractionsButton();      noInteractions.className = 'fade-in';
        interactionsList.appendChild(noInteractions);
    }
}

updateCheckInteractionsButton();