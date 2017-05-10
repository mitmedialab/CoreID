For project related diagrams.

## Swimlane Diagrams 

The main value of swimlane diagrams (aka "cross-functional diagram") is "role" separation in a way that clearly sequences and allocates important functions and events to "people" (ie a human or organization).  For this purpose a "person" is any "legal" entity.  As a shortcut, you can ask whether an entity can sue and be sued in order to get a pretty good sense of whether it is a legal person or not.  A software system is not a legal person but a software system vendor or software system implementer or software system user, etc probably is a legal person.  "HTML" and "Javascript" and "Ethereum Node" and "Wallet" and "Database" are important items to diagram in order to illustrate some aspects of a system but not for a swimlane diagram intended for the purposes of identifying business/legal entity "cross-functional" roles.  

For examples check out: 
http://www.modernanalyst.com/Careers/InterviewQuestions/tabid/128/ID/1804/What-is-a-Swimlane-Diagram.aspx
Roles: Customer; Sales; Legal; et

and see:
http://www.agilemodeling.com/style/activityDiagram.htm
Roles: Faculty Advisor, Student; Admin; et

and see:
http://www.agilemodeling.com/style/activityDiagram.htm
Roles: Consultant; Accountant; Payroll, etc


So - we'd expect something including roles like: 
* User (client or credit union member etc); 
* Third party (or merchant or seller, etc); 
* App provider (lawyer or credit union etc)

### Examples

* From [http://www.agilemodeling.com/style/activityDiagram.htm](http://www.agilemodeling.com/style/activityDiagram.htm):

<img width="615" alt="fig1-highlevelprototcolflow" src="https://github.com/mitmedialab/CoreID/blob/master/diagrams/expenses.png">

* From [http://www.modernanalyst.com/Careers/InterviewQuestions/tabid/128/ID/1804/What-is-a-Swimlane-Diagram.aspx](http://www.modernanalyst.com/Careers/InterviewQuestions/tabid/128/ID/1804/What-is-a-Swimlane-Diagram.aspx)

<img width="615" alt="fig1-highlevelprototcolflow" src="https://github.com/mitmedialab/CoreID/blob/master/diagrams/sales.png">

Now consider the following ["User Managed Access" diagram](https://www.websequencediagrams.com/files/render?link=gnYlOf_cwh605AwcO-9i): 

<img width="615" alt="fig1-highlevelprototcolflow" src="https://github.com/mitmedialab/CoreID/blob/master/diagrams/UMA-EarlySwimlane.png">

Note that in this particular version, the person making the diagram chose not to be clear about which legal party was going to be responsible for the "authorization server" and for the "resource server".  In other versions, we made swimlane diagrams for each key business/legal scenario that involved a different legal/business "role" responsible for providing the auth and/or resource services.  This simply required taking the auth and resource server functions and actions identified in the diagram above and allocating them to the identified legal/business "roles" for each key identified scenario.  

For context, in OAuth 2 and OIDC deployment scenarios, the same party may operates both the auth and resource servers and provides corresponding services to the resource owner, (such as with Google providing Google Docs and also the authorization services allowing Google users to grant third parties access of various types to see/change/etc Google Docs. Sometimes however these are services may be provided by different legal entities including one business unit of a "resource owner" company providing the service(s) to other business units of the same company.  

The legal and business entity responsible for providing the "client" (app) was not identified in the diagram version above.  The first column is for the "resource owner" who is the "user" of the "client" app but is almost certainly not the legal party responsible for providing and maintaining the client app (or apps) operated by the user as part of the UMA/OAuth 2/OIDC flow shown by the SwimLane diagram.  For more info on the fundamentals of these roles, take another look at the OAuth 2 role-designations I shared with you before, available here: https://github.com/mitmedialab/CoreID/blob/master/diagrams/README.md (see the "Token Refresh Flow" and "Authorization Explicit Grant Flow" diagrams on this page for good examples of how we track OAuth 2 "roles" to "functions" and "actions" as part of a simplified cross-functional role/activity sequence diagram.)

## Common Web Context: OAuth 2 

**Mapping Blockchain-Enabled Identity to Roles and Flows the Common Broader Context of the Open Web**

* [https://tools.ietf.org/html/rfc6749](https://tools.ietf.org/html/rfc6749)

### High Level Protocol Flow

<img width="615" alt="fig1-highlevelprototcolflow" src="https://raw.githubusercontent.com/mitmedialab/CoreID/master/diagrams/Fig1-HighLevelPrototcolFlow.png">

### Token Refresh Flow

<img width="615" alt="Fig2-TokenRefresh" src="https://raw.githubusercontent.com/mitmedialab/CoreID/master/diagrams/Fig2-TokenRefresh.png">

### Authorization Explicit Grant Flow 

<img width="615" alt="Fig3-AuthFlow" src="https://raw.githubusercontent.com/mitmedialab/CoreID/master/diagrams/Fig3-AuthFlow.png">

### Implicit Authorization Flow 

<img width="615" alt="Fig4-ImplicitFlow.png" src="https://raw.githubusercontent.com/mitmedialab/CoreID/master/diagrams/Fig4-ImplicitFlow.png">
	

