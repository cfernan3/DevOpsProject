import os
import sys
import pickle
import xml.etree.ElementTree as ET

def parseFile(dataFile,resultsTracker):
    xmlFile = ET.parse(dataFile)
    root = xmlFile.getroot()
    sections = root.getchildren()
    testSuites = filter(lambda x: x.tag=="suites", sections)
    if len(testSuites)!=0:
        testSuites = testSuites[0]
    #print testSuites

    for testSuite in testSuites.getchildren():
        suiteElements = testSuite.getchildren()
        testcases = filter(lambda x: x.tag=="cases", suiteElements)
        if len(testcases)!=0:
            testcases = testcases[0]
#	    print testcases
            for case in testcases:
                testName = filter(lambda x: x.tag=="testName", case)[0].text
                skippedStatus = filter(lambda x: x.tag == "skipped", case)[0].text
                failureStatus = filter(lambda x: x.tag == "failedSince", case)[0].text
                value = None
                if testName in resultsTracker:
                    value = resultsTracker[testName]
                else:
                    value = {"passed":0,"failed":0}
                if skippedStatus!="false" or failureStatus!="0":
                    value["failed"]+=1
                else:
                    value["passed"]+=1
                resultsTracker[testName] = value
	  	#print resultsTracker
    return resultsTracker

def getResultsDict():
    resultsTracker = dict()
    if os.path.isfile("resultsStructure"):
        filePointer = open("resultsStructure", "r")
        resultsTracker = pickle.load(filePointer)
        filePointer.close()
    return resultsTracker

def saveResultsDict(resultsTracker):
    filePointer = open("resultsStructure","w")
    pickle.dump(resultsTracker,filePointer)
    filePointer.close()

def writeResultsToFile(resultsTracker):
    filePointer = open("results.csv","w")
    filePointer.write("Useless TestCases")
    for key in resultsTracker:
        value = resultsTracker[key]
        if str(value["failed"]) == "0":
                filePointer.write("\n"+key)
    filePointer.close()
	
if __name__=="__main__":
    if len(sys.argv) > 1:
        dataFile = str(sys.argv[1])
    else:
        print "junit report file not provided"
        exit()

    resultsTracker = getResultsDict()
    resultsTracker = parseFile(dataFile,resultsTracker)
    saveResultsDict(resultsTracker)
    writeResultsToFile(resultsTracker)
