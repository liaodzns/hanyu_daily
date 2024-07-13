from python.listmanager import ListManager
import random


class Level():
    # Each Level has its own Level class object

    # [{'hanyu': '啊', 'pinyin': 'a', 'translation': 'auxiliary word'}, {'hanyu': '爱情', 'pinyin': 'àiqíng', 'translation': 'Love'}, 
    # {'hanyu': '爱人', 'pinyin': 'ài rén', 'translation': 'lover'}, {'hanyu': '安静', 'pinyin': 'ānjìng', 'translation': 'Be quiet'}]
    def __init__(self, level : str):
        self.listmanager = ListManager()
        self.level = self.listmanager.parse(f"{level}.csv")
        self.alreadychosen = []
        self.refresh = False
        self.currentHanyuDict = self.randomize()
        self.hanyu = self.currentHanyuDict['hanyu']
        self.pinyin = self.currentHanyuDict['pinyin']
        self.translation = self.currentHanyuDict['translation']
        self.refreshRequested = False

    def randomize(self) -> None:
        ''' 
        Randomly choose one dictionary from the list of dictionaries
        '''
        if not self.level:
            return None
        random_choice = random.choice(self.level)
        if self.listmanager.dict_in_list(self.alreadychosen, random_choice):
            print("This word was already chosen recently. Refreshing...")
            self.randomize()

        self.alreadychosen.append(random_choice)
        return random_choice

    def newSelection(self) -> dict:
        '''
        Chooses a new word
        '''
        if self.refreshRequested:
            self.currentHanyuDict = self.randomize()
            self.hanyu = self.currentHanyuDict['hanyu']
            self.pinyin = self.currentHanyuDict['pinyin']
            self.translation = self.currentHanyuDict['translation']
        else:
            print("Something went wrong; A refresh was not requested")

        self.refreshRequested = False

