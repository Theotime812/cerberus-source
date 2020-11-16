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
package org.cerberus.crud.entity;

import java.sql.Timestamp;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.List;
import java.util.Objects;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * @author bcivel
 */
public class TestCaseStep {

    private String test;
    private String testcase;
    private int stepId;
    private int sort;
    private String loop;
    private String conditionOperator;
    private String conditionVal1;
    private String conditionVal2;
    private String conditionVal3;
    private String description;
    private boolean isUsingLibraryStep;  //  true if the stepId use a stepId from another test
    private String libraryStepTest; //  The test of the used stepId
    private String libraryStepTestCase;  // The testcase of the used stepId
    private Integer libraryStepStepId;   //  the stepId of the original step
    private boolean isLibraryStep;
    private boolean isExecutionForced;
    private String usrCreated;
    private String dateCreated;
    private String usrModif;
    private Timestamp dateModif;
    /**
     * Not included in table.
     */
    private List<TestCaseStepAction> actions;
    private boolean isStepInUseByOtherTestCase;
    private int initialStep;
    private TestCase testCaseObj;
    private int useStepStepSort;

    /**
     * Invariant PROPERTY TYPE String.
     */
    public static final String LOOP_ONCEIFCONDITIONTRUE = "onceIfConditionTrue";
    public static final String LOOP_ONCEIFCONDITIONFALSE = "onceIfConditionFalse";
    public static final String LOOP_DOWHILECONDITIONTRUE = "doWhileConditionTrue";
    public static final String LOOP_DOWHILECONDITIONFALSE = "doWhileConditionFalse";
    public static final String LOOP_WHILECONDITIONTRUEDO = "whileConditionTrueDo";
    public static final String LOOP_WHILECONDITIONFALSEDO = "whileConditionFalseDo";

    public boolean isExecutionForced() {
        return isExecutionForced;
    }

    public void setExecutionForced(boolean isExecutionForced) {
        this.isExecutionForced = isExecutionForced;
    }

    public String getUsrCreated() {
        return usrCreated;
    }

    public void setUsrCreated(String usrCreated) {
        this.usrCreated = usrCreated;
    }

    public String getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getUsrModif() {
        return usrModif;
    }

    public void setUsrModif(String usrModif) {
        this.usrModif = usrModif;
    }

    public Timestamp getDateModif() {
        return dateModif;
    }

    public void setDateModif(Timestamp dateModif) {
        this.dateModif = dateModif;
    }

    public TestCase getTestCaseObj() {
        return testCaseObj;
    }

    public void setTestCaseObj(TestCase testCaseObj) {
        this.testCaseObj = testCaseObj;
    }

    public boolean isLibraryStep() {
        return isLibraryStep;
    }

    public void setLibraryStep(boolean isLibraryStep) {
        this.isLibraryStep = isLibraryStep;
    }

    public int getInitialStep() {
        return initialStep;
    }

    public void setInitialStep(int initialStep) {
        this.initialStep = initialStep;
    }

    public boolean isIsStepInUseByOtherTestCase() {
        return isStepInUseByOtherTestCase;
    }

    public void setIsStepInUseByOtherTestCase(boolean isStepInUseByOtherTestCase) {
        this.isStepInUseByOtherTestCase = isStepInUseByOtherTestCase;
    }

    public boolean isUsingLibraryStep() {
        return isUsingLibraryStep;
    }

    public void setUsingLibraryStep(boolean isUsingLibraryStep) {
        this.isUsingLibraryStep = isUsingLibraryStep;
    }

    public String getLibraryStepTest() {
        return libraryStepTest;
    }

    public void setLibraryStepTest(String libraryStepTest) {
        this.libraryStepTest = libraryStepTest;
    }

    public String getLibraryStepTestCase() {
        return libraryStepTestCase;
    }

    public void setLibraryStepTestCase(String libraryStepTestCase) {
        this.libraryStepTestCase = libraryStepTestCase;
    }

    public Integer getLibraryStepStepId() {
        return libraryStepStepId;
    }

    public void setLibraryStepStepId(Integer libraryStepStepId) {
        this.libraryStepStepId = libraryStepStepId;
    }

    public List<TestCaseStepAction> getActions() {
        return actions;
    }

    public void setActions(List<TestCaseStepAction> actions) {
        this.actions = actions;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getStepId() {
        return stepId;
    }

    public int getSort() {
        return sort;
    }

    public void setSort(int sort) {
        this.sort = sort;
    }

    public int getUseStepStepSort() {
        return useStepStepSort;
    }

    public void setUseStepStepSort(int useStepStepSort) {
        this.useStepStepSort = useStepStepSort;
    }

    public String getLoop() {
        return loop;
    }

    public void setLoop(String loop) {
        this.loop = loop;
    }

    public String getConditionOperator() {
        return conditionOperator;
    }

    public void setConditionOperator(String conditionOperator) {
        this.conditionOperator = conditionOperator;
    }

    public String getConditionVal1() {
        return conditionVal1;
    }

    public void setConditionVal1(String conditionVal1) {
        this.conditionVal1 = conditionVal1;
    }

    public String getConditionVal2() {
        return conditionVal2;
    }

    public void setConditionVal2(String conditionVal2) {
        this.conditionVal2 = conditionVal2;
    }

    public String getConditionVal3() {
        return conditionVal3;
    }

    public void setConditionVal3(String conditionVal3) {
        this.conditionVal3 = conditionVal3;
    }

    public void setStepId(int stepId) {
        this.stepId = stepId;
    }

    public String getTest() {
        return test;
    }

    public void setTest(String test) {
        this.test = test;
    }

    public String getTestcase() {
        return testcase;
    }

    public void setTestcase(String testcase) {
        this.testcase = testcase;
    }

    public boolean hasSameKey(TestCaseStep obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final TestCaseStep other = (TestCaseStep) obj;
        if ((this.test == null) ? (other.test != null) : !this.test.equals(other.test)) {
            return false;
        }
        if ((this.testcase == null) ? (other.testcase != null) : !this.testcase.equals(other.testcase)) {
            return false;
        }
        if (this.stepId != other.stepId) {
            return false;
        }
        return true;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 29 * hash + (this.test != null ? this.test.hashCode() : 0);
        hash = 29 * hash + (this.testcase != null ? this.testcase.hashCode() : 0);
        hash = 29 * hash + this.stepId;
        hash = 29 * hash + this.sort;
        hash = 29 * hash + (this.loop != null ? this.loop.hashCode() : 0);
        hash = 29 * hash + (this.conditionOperator != null ? this.conditionOperator.hashCode() : 0);
        hash = 29 * hash + (this.conditionVal1 != null ? this.conditionVal1.hashCode() : 0);
        hash = 29 * hash + (this.conditionVal2 != null ? this.conditionVal2.hashCode() : 0);
        hash = 29 * hash + (this.conditionVal3 != null ? this.conditionVal3.hashCode() : 0);
        hash = 29 * hash + (this.description != null ? this.description.hashCode() : 0);
        hash = 29 * hash + (this.isUsingLibraryStep ? 1 : 0);
        hash = 29 * hash + (this.libraryStepTest != null ? this.libraryStepTest.hashCode() : 0);
        hash = 29 * hash + (this.libraryStepTestCase != null ? this.libraryStepTestCase.hashCode() : 0);
        hash = 29 * hash + (this.isLibraryStep ? 1 : 0);
        hash = 29 * hash + (this.isExecutionForced ? 1 : 0);
        return hash;
    }

       @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final TestCaseStep other = (TestCaseStep) obj;
        if ((this.test == null) ? (other.test != null) : !this.test.equals(other.test)) {
            return false;
        }
        if ((this.testcase == null) ? (other.testcase != null) : !this.testcase.equals(other.testcase)) {
            return false;
        }
        if (this.stepId != other.stepId) {
            return false;
        }
        if (this.sort != other.sort) {
            return false;
        }
        if (this.loop != other.loop && (this.loop == null || !this.loop.equals(other.loop))) {
            return false;
        }
        if (this.conditionOperator != other.conditionOperator && (this.conditionOperator == null || !this.conditionOperator.equals(other.conditionOperator))) {
            return false;
        }
        if (this.conditionVal1 != other.conditionVal1 && (this.conditionVal1 == null || !this.conditionVal1.equals(other.conditionVal1))) {
            return false;
        }
        if (this.conditionVal2 != other.conditionVal2 && (this.conditionVal2 == null || !this.conditionVal2.equals(other.conditionVal2))) {
            return false;
        }
        if (this.conditionVal3 != other.conditionVal3 && (this.conditionVal3 == null || !this.conditionVal3.equals(other.conditionVal3))) {
            return false;
        }
        if ((this.description == null) ? (other.description != null) : !this.description.equals(other.description)) {
            return false;
        }
        if ((this.isUsingLibraryStep != other.isUsingLibraryStep)) {
            return false;
        }
        if ((this.libraryStepTest == null) ? (other.libraryStepTest != null) : !this.libraryStepTest.equals(other.libraryStepTest)) {
            return false;
        }
        if ((this.libraryStepTestCase == null) ? (other.libraryStepTestCase != null) : !this.libraryStepTestCase.equals(other.libraryStepTestCase)) {
            return false;
        }
        if (this.libraryStepStepId != other.libraryStepStepId && (this.libraryStepStepId == null || !this.libraryStepStepId.equals(other.libraryStepStepId))) {
            return false;
        }
        if (this.isLibraryStep != other.isLibraryStep) {
            return false;
        }
        if (this.isExecutionForced != other.isExecutionForced) {
            return false;
        }
        return true;
    }



    @Override
    public String toString() {
        return "TestCaseStep{" + "test=" + test + ", testcase=" + testcase + ", step=" + stepId + ", sort=" + sort + ", loop=" + loop + ", conditionOperator=" + conditionOperator + ", conditionVal1=" + conditionVal1 + ", conditionVal2=" + conditionVal2 + ", conditionVal3=" + conditionVal3 + ", description=" + description + ", isUsingLibraryStep=" + isUsingLibraryStep + ", libraryStepTest=" + libraryStepTest + ", useStepTestCase=" + libraryStepTestCase + ", libraryStepStepId=" + libraryStepStepId + ", isLibraryStep=" + isLibraryStep + ", isExecutionForced=" + isExecutionForced + ", usrCreated=" + usrCreated + ", dateCreated=" + dateCreated + ", usrModif=" + usrModif + ", dateModif=" + dateModif + ", actions=" + actions + ", isStepInUseByOtherTestCase=" + isStepInUseByOtherTestCase + ", initialStep=" + initialStep + ", testCaseObj=" + testCaseObj + '}';
    }

    public JSONObject toJson() {
        JSONObject stepJson = new JSONObject();
        try {
            stepJson.put("sort", this.getSort());
            stepJson.put("stepId", this.getStepId());
            stepJson.put("description", this.getDescription());
            stepJson.put("isExecutionForced", this.isExecutionForced());
            stepJson.put("loop", this.getLoop());
            stepJson.put("conditionOperator", this.getConditionOperator());
            stepJson.put("conditionVal1", this.getConditionVal1());
            stepJson.put("conditionVal2", this.getConditionVal2());
            stepJson.put("conditionVal3", this.getConditionVal3());
            stepJson.put("isUsingLibraryStep", this.isUsingLibraryStep());
            stepJson.put("isLibraryStep", this.isLibraryStep());
            stepJson.put("libraryStepTest", this.getLibraryStepTest());
            stepJson.put("libraryStepTestCase", this.getLibraryStepTestCase());
            stepJson.put("libraryStepStepId", this.getLibraryStepStepId());
            stepJson.put("test", this.getTest());
            stepJson.put("testcase", this.getTestcase());
            stepJson.put("initialStep", this.getInitialStep());
            stepJson.put("usrCreated", this.usrCreated);
            stepJson.put("dateCreated", this.dateCreated);
            stepJson.put("usrModif", this.usrModif);
            stepJson.put("dateModif", this.dateModif);
            stepJson.put("isStepInUseByOtherTestCase", this.isIsStepInUseByOtherTestCase());
            stepJson.put("useStepStepSort", this.getUseStepStepSort());

            JSONArray stepsJson = new JSONArray();
            if (this.getActions() != null) {
                for (TestCaseStepAction action : this.getActions()) {
                    stepsJson.put(action.toJson());
                }
            }
            stepJson.put("actions", stepsJson);

        } catch (JSONException ex) {
            Logger LOG = LogManager.getLogger(TestCaseStep.class
            );
            LOG.warn(ex);
        }
        return stepJson;
    }

}
