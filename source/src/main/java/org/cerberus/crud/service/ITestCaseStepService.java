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
package org.cerberus.crud.service;

import org.cerberus.crud.entity.TestCaseStep;
import org.cerberus.exception.CerberusException;
import org.cerberus.util.answer.Answer;
import org.cerberus.util.answer.AnswerList;

import java.util.Collection;
import java.util.List;

/**
 * @author bcivel
 */
public interface ITestCaseStepService {

    /**
     * GetListOfSteps
     *
     * @param test
     * @param testcase
     * @return List of TestCaseStep
     */
    List<TestCaseStep> getListOfSteps(String test, String testcase);

    /**
     * FindTestCaseStep
     *
     * @param test
     * @param testcase
     * @param stepId
     * @return TestCaseStep object
     */
    TestCaseStep findTestCaseStep(String test, String testcase, Integer stepId);

    /**
     * This method is changing the data that belong to masterStep by the data
     * that is inherited from the usedStep.
     *
     * @param masterStep
     * @return masterStep but with data replaced from used step in case the step
     * is linked with a used step.
     */
    TestCaseStep modifyTestCaseStepDataFromUsedStep(TestCaseStep masterStep);

    public void updateTestCaseStep(TestCaseStep tcsLeft) throws CerberusException;

    public void deleteTestCaseStep(TestCaseStep tcs) throws CerberusException;

    public void deleteListTestCaseStep(List<TestCaseStep> tcsToDelete) throws CerberusException;

    List<TestCaseStep> getTestCaseStepUsingStepInParamter(String test, String testCase, int stepId) throws CerberusException;

    List<TestCaseStep> getTestCaseStepUsingTestCaseInParamter(String test, String testCase) throws CerberusException;

    List<TestCaseStep> getTestCaseStepsUsingTestInParameter(String test) throws CerberusException;

    public void compareListAndUpdateInsertDeleteElements(List<TestCaseStep> newList, List<TestCaseStep> oldList, boolean duplicate) throws CerberusException;

    List<TestCaseStep> getStepUsedAsLibraryInOtherTestCaseByApplication(String application) throws CerberusException;

    List<TestCaseStep> getStepLibraryBySystem(String system) throws CerberusException;

    List<TestCaseStep> getStepLibraryBySystemTest(String system, String test) throws CerberusException;

    List<TestCaseStep> getStepLibraryBySystemTestTestCase(String system, String test, String testCase) throws CerberusException;

    AnswerList<TestCaseStep> readByTestTestCase(String test, String testcase);

    List<TestCaseStep> readByTestTestCaseAPI(String test, String testcase);

    AnswerList<TestCaseStep> readByLibraryUsed(String test, String testcase, int stepId);

    /**
     * @param test
     * @param testcase
     * @return
     */
    AnswerList<TestCaseStep> readByTestTestCaseStepsWithDependencies(String test, String testcase);

    TestCaseStep readTestcaseStepWithDependencies(String test, String testcase, int stepId);

    TestCaseStep readTestcaseStepWithDependenciesAPI(String test, String testcase, int stepId);

    /**
     * @param object
     * @return
     */
    Answer create(TestCaseStep object);

    /**
     * @param objectList
     * @return
     */
    Answer createList(List<TestCaseStep> objectList);

    /**
     * @param objectList
     * @param test
     * @param testCase
     * @return
     */
    Answer duplicateList(List<TestCaseStep> objectList, String test, String testCase);

    /**
     * Get the highest stepId number from the given steps
     *
     * @param steps a collection of steps from which get the highest stepId
     * @return the highest stepId number from the given steps
     */
    int getMaxStepId(Collection<TestCaseStep> steps);
}
