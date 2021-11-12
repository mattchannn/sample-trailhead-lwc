/**
 * @author Mat CHAN
 */

global with sharing class hd_AccountHandler implements vlocity_ins.VlocityOpenInterface {

  global Boolean invokeMethod(String methodName, Map<String, Object> inputMap, Map<String, Object> outputMap, Map<String, Object> options) {
        Boolean result = true;
        String errors = 'OK';
        System.debug('>> invokeMethod');
       
        try {
          if (methodName == 'saveAccount') {
            saveAccount(inputMap, outputMap, options);
          }
        } catch (Exception e) {
          errors = e.getMessage();
          System.debug('>> error: ' + errors);
          result = false;
        }

        outputMap.put('success', result);
        outputMap.put('error', errors);
        
        return result;
      }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name FROM Account WITH SECURITY_ENFORCED LIMIT 10];
    }

    @AuraEnabled(cacheable=true)
    public static Account getSingleAccountByAccountId() {
        return [
            SELECT Id, Name, Phone, Type
            FROM Account
            WITH SECURITY_ENFORCED
            LIMIT 1
        ];
    }

    public static void saveAccount(Map<String,Object> inputMap, Map<String,Object> outputMap, Map<String, Object> options) {
        system.debug('>> saveAccount starts');
        Account acct = new Account();

        
        String accountName = (String) inputMap.get('accountName');
        String website = (String) inputMap.get('website');
        acct.Name = accountName;
        acct.Website = website;

        system.debug('>> Before saving account detail');
        system.debug('>> accountName = ' + accountName + ', website = ' + website);
        system.debug('>> options: ' + options);
        
        hd_CommonUtilities.insertAccount(acct);
        system.debug('>> saveAccount ends');

        outputMap.put('accountCreationResult', acct);
        
    }
}