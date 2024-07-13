import pandas as pd
import os

cwd = os.getcwd()

class ListManager():
    def __init__(self):
        self.entries = None

    def parse(self, filename) -> list:
        df = pd.read_csv(f"{cwd}/LevelLists/{filename}", usecols=['hanyu', 'pinyin', 'translation'])
        result = df.to_dict(orient='records')

        self.entries = result
        return result
    
    def update(self, filename) -> None:
        if self.entries is not None:
            df = pd.read_csv(f"{cwd}/LevelLists/{filename}", usecols=['hanyu', 'pinyin', 'translation'])
            result = df.to_dict(orient='records')

            for item in result:
                if not self.dict_in_list(self.entries, item):
                    self.entries.append(item)
            
    def dict_in_list(self, dict_list, target_dict): 
        return any(d == target_dict for d in dict_list)

