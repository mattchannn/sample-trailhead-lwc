/**
 * @author Mat CHAN
 */

public with sharing class hd_CommonUtilities {

  public static String phoneNumber = '(852) 9634-7641';
  public static String billingState = 'NY';
  public static String billingPostalCode = '051';
  public static String billingStreet = '2100 Woodward Ave';
  public static String accountType = 'Technology Partner';

  // TO-DO
  public static Account getSingleAccountByAccountId(ID accountId) {
      Account accountDetails = new Account();

      if (accountId == null) {
        throw new ApplicationException('Account Id is not existed');
      }

      try {
        List<Account> accountList = [SELECT ID,RecordType.Name from Account WHERE ID=:accountId];
      } catch (Exception e) {
        throw new ApplicationException('Account Detail is not found');
      }

      return accountDetails;
  }

  public static void insertAccount(Account acct) {
    Account accountDetails = new Account();

    if (acct == null) {
      throw new ApplicationException('Account Detail is not existed');
    }

    try {
      acct.BillingState = billingState;
      acct.BillingStreet = billingStreet;
      acct.BillingPostalCode = billingPostalCode;
      acct.Phone = phoneNumber;
      acct.Type = accountType;
      insert acct;
    } catch (Exception e) {
      throw new ApplicationException('DML Insertion Error ' + e.getMessage());
    }
  }
}