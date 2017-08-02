/**
 * Cerberus Copyright (C) 2013 - 2017 cerberustesting
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This file is part of Cerberus.
 *
 * Cerberus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Cerberus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Cerberus.  If not, see <http://www.gnu.org/licenses/>.
 */
package org.cerberus.crud.factory.impl;

import java.sql.Timestamp;
import java.util.Date;
import org.cerberus.crud.entity.TestCaseExecutionQueue;
import org.cerberus.crud.factory.IFactoryTestCaseExecutionQueue;
import org.cerberus.exception.FactoryCreationException;
import org.springframework.stereotype.Service;

/**
 * Default {@link IFactoryTestCaseExecutionQueue} implementation
 *
 * @author abourdon
 */
@Service
public class FactoryTestCaseExecutionQueue implements IFactoryTestCaseExecutionQueue {

    private static final long NEW_ENTRY_INDEX = -1;

    @Override
    public TestCaseExecutionQueue create(long id, String test, String testCase, String country, String environment, String robot, String robotIP, String robotPort,
            String browser, String browserVersion, String platform, String screenSize, int manualURL, String manualHost, String manualContextRoot, String manualLoginRelativeURL,
            String manualEnvData, String tag, int screenshot, int verbose, String timeout, int pageSource, int seleniumLog,
            long exeId, Integer retries, String manualExecution, String usrCreated, Timestamp dateCreated, String usrModif, Timestamp dateModif) throws FactoryCreationException {
        try {
            TestCaseExecutionQueue inQueue = new TestCaseExecutionQueue();
            inQueue.setId(id);
            inQueue.setTest(test);
            inQueue.setTestCase(testCase);
            inQueue.setCountry(country);
            inQueue.setEnvironment(environment);
            inQueue.setRobot(robot);
            inQueue.setRobotIP(robotIP);
            inQueue.setRobotPort(robotPort);
            inQueue.setBrowser(browser);
            inQueue.setBrowserVersion(browserVersion);
            inQueue.setPlatform(platform);
            inQueue.setScreenSize(screenSize);
            inQueue.setManualURL(manualURL);
            inQueue.setManualHost(manualHost);
            inQueue.setManualContextRoot(manualContextRoot);
            inQueue.setManualLoginRelativeURL(manualLoginRelativeURL);
            inQueue.setManualEnvData(manualEnvData);
            inQueue.setTag(tag);
            inQueue.setScreenshot(screenshot);
            inQueue.setVerbose(verbose);
            inQueue.setTimeout(timeout);
            inQueue.setPageSource(pageSource);
            inQueue.setSeleniumLog(seleniumLog);
            inQueue.setUsrCreated(usrCreated);
            inQueue.setUsrModif(usrModif);
            inQueue.setDateCreated(dateCreated);
            inQueue.setDateModif(dateModif);
            inQueue.setRetries(retries);
            inQueue.setManualExecution(manualExecution);
            inQueue.setExeId(exeId);
            return inQueue;
        } catch (IllegalArgumentException iae) {
            throw new FactoryCreationException("Unable to create a TestCaseExecutionInQueue instance", iae);
        } catch (IllegalStateException ise) {
            throw new FactoryCreationException("Unable to create a TestCaseExecutionInQueue instance", ise);
        }
    }

    @Override
    public TestCaseExecutionQueue create(String test, String testCase, String country, String environment, String robot, String robotIP, String robotPort, String browser,
            String browserVersion, String platform, String screenSize, int manualURL, String manualHost, String manualContextRoot, String manualLoginRelativeURL, String manualEnvData,
            String tag, int screenshot, int verbose, String timeout, int pageSource, int seleniumLog, long exeId, Integer retries,
            String manualExecution, String usrCreated, Timestamp dateCreated, String usrModif, Timestamp dateModif)
            throws FactoryCreationException {
        TestCaseExecutionQueue inQueue = create(NEW_ENTRY_INDEX, test, testCase, country, environment, robot, robotIP, robotPort, browser, browserVersion, platform, screenSize, manualURL, manualHost,
                manualContextRoot, manualLoginRelativeURL, manualEnvData, tag, screenshot, verbose, timeout, pageSource, seleniumLog, exeId,
                retries, manualExecution, usrCreated, dateCreated, usrModif, dateModif);
        inQueue.setState(TestCaseExecutionQueue.State.QUEUED);
        return inQueue;
    }

    @Override
    public TestCaseExecutionQueue create(long id, String test, String testCase, String country, String environment, String robot, String robotIP, String robotPort, String browser,
            String browserVersion, String platform, String screenSize, int manualURL, String manualHost, String manualContextRoot, String manualLoginRelativeURL, String manualEnvData,
            String tag, int screenshot, int verbose, String timeout, int pageSource, int seleniumLog, Date requestDate, TestCaseExecutionQueue.State state, String comment, Integer retries,
            String manualExecution, long exeId, String usrCreated, Timestamp dateCreated, String usrModif, Timestamp dateModif) throws FactoryCreationException {
        TestCaseExecutionQueue inQueue;
        inQueue = this.create(id, test, testCase, country, environment, robot, robotIP, robotPort, browser, browserVersion, platform, screenSize, manualURL, manualHost,
                manualContextRoot, manualLoginRelativeURL, manualEnvData, tag, screenshot, verbose, timeout, pageSource, seleniumLog, exeId, retries, manualExecution,
                usrCreated, dateCreated, usrModif, dateModif);
        inQueue.setState(state);
        inQueue.setComment(comment);
        inQueue.setRequestDate(requestDate);
        return inQueue;
    }
}
