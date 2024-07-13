import pandas as pd
import sys, os

cwd = os.getcwd()

def ListParser(filename):

    df = pd.read_csv(f"{cwd}/LevelLists/{filename}", usecols=['hanyu', 'pinyin', 'translation'])
    result = df.to_dict(orient='records')
    
    
    return result

# Success! Created javascript at C:\Users\danli\Github\hanyu_daily\javascript
# Inside that directory, you can run several commands:

#   npm start
#     Starts the development server.

#   npm run build
#     Bundles the app into static files for production.

#   npm test
#     Starts the test runner.

#   npm run eject
#     Removes this tool and copies build dependencies, configuration files
#     and scripts into the app directory. If you do this, you can’t go back!

# We suggest that you begin by typing:

#   cd C:\Users\danli\Github\hanyu_daily\javascript
#   npm start

# Happy hacking!
