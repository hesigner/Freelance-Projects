function togglesidebar(){
    if(document.getElementById("sidebar").style.marginLeft=="-400px"){
        document.getElementById("sidebar").style.marginLeft="0px";
        document.getElementById("pagebody").style.paddingLeft="300px";
        document.getElementById("sidebar").style.transition="1s";
        document.getElementById("pagebody").style.transition="1s";

    }
    else{
        document.getElementById("sidebar").style.marginLeft="-400px";
        document.getElementById("pagebody").style.paddingLeft="50px";
        document.getElementById("sidebar").style.transition="1s";
        document.getElementById("pagebody").style.transition="1s";
    }
}

function showTodaysQuote(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="";
    document.getElementById("ReadyQuotes").style.display="none";
    document.getElementById("AllQuotes").style.display="none";
    document.getElementById("ConvertOrder").style.display="none";
    document.getElementById("TodaysOrder").style.display="none";
    document.getElementById("ReadyOrder").style.display="none";
    document.getElementById("AllOrder").style.display="none";
    document.getElementById("OrderWithPrice0").style.display="none";
    document.getElementById("OrderWithPrice").style.display="none";
    document.getElementById("TodaysVector").style.display="none";
    document.getElementById("ReadyVector").style.display="none";
    document.getElementById("AllVectors").style.display="none";
    document.getElementById("VectorWithPrice0").style.display="none";
    document.getElementById("VectorWithPrice").style.display="none";
    document.getElementById("Customers").style.display="none";
    document.getElementById("AllCustomers").style.display="none";
    document.getElementById("Designer").style.display="none";
    document.getElementById("SalesmanReport").style.display="none";
    document.getElementById("OrderReport").style.display="none";
    document.getElementById("CustomerReport").style.display="none";
    document.getElementById("CompanyReport").style.display="none";
    document.getElementById("CallHistory").style.display="none";
    document.getElementById("Employee").style.display="none";
}
function showReadyQuote(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
document.getElementById("ReadyQuotes").style.display="";
document.getElementById("AllQuotes").style.display="none";
document.getElementById("ConvertOrder").style.display="none";
document.getElementById("TodaysOrder").style.display="none";
document.getElementById("ReadyOrder").style.display="none";
document.getElementById("AllOrder").style.display="none";
document.getElementById("OrderWithPrice0").style.display="none";
document.getElementById("OrderWithPrice").style.display="none";
document.getElementById("TodaysVector").style.display="none";
document.getElementById("ReadyVector").style.display="none";
document.getElementById("AllVectors").style.display="none";
document.getElementById("VectorWithPrice0").style.display="none";
document.getElementById("VectorWithPrice").style.display="none";
document.getElementById("Customers").style.display="none";
document.getElementById("AllCustomers").style.display="none";
document.getElementById("Designer").style.display="none";
document.getElementById("SalesmanReport").style.display="none";
document.getElementById("OrderReport").style.display="none";
document.getElementById("CustomerReport").style.display="none";
document.getElementById("CompanyReport").style.display="none";
document.getElementById("CallHistory").style.display="none";
document.getElementById("Employee").style.display="none";
}
function showAllQuote(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
document.getElementById("ReadyQuotes").style.display="none";
document.getElementById("AllQuotes").style.display="";
document.getElementById("ConvertOrder").style.display="none";
document.getElementById("TodaysOrder").style.display="none";
document.getElementById("ReadyOrder").style.display="none";
document.getElementById("AllOrder").style.display="none";
document.getElementById("OrderWithPrice0").style.display="none";
document.getElementById("OrderWithPrice").style.display="none";
document.getElementById("TodaysVector").style.display="none";
document.getElementById("ReadyVector").style.display="none";
document.getElementById("AllVectors").style.display="none";
document.getElementById("VectorWithPrice0").style.display="none";
document.getElementById("VectorWithPrice").style.display="none";
document.getElementById("Customers").style.display="none";
document.getElementById("AllCustomers").style.display="none";
document.getElementById("Designer").style.display="none";
document.getElementById("SalesmanReport").style.display="none";
document.getElementById("OrderReport").style.display="none";
document.getElementById("CustomerReport").style.display="none";
document.getElementById("CompanyReport").style.display="none";
document.getElementById("CallHistory").style.display="none";
document.getElementById("Employee").style.display="none";
}
function showConvertOrder(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
document.getElementById("ReadyQuotes").style.display="none";
document.getElementById("AllQuotes").style.display="none";
document.getElementById("ConvertOrder").style.display="";
document.getElementById("TodaysOrder").style.display="none";
document.getElementById("ReadyOrder").style.display="none";
document.getElementById("AllOrder").style.display="none";
document.getElementById("OrderWithPrice0").style.display="none";
document.getElementById("OrderWithPrice").style.display="none";
document.getElementById("TodaysVector").style.display="none";
document.getElementById("ReadyVector").style.display="none";
document.getElementById("AllVectors").style.display="none";
document.getElementById("VectorWithPrice0").style.display="none";
document.getElementById("VectorWithPrice").style.display="none";
document.getElementById("Customers").style.display="none";
document.getElementById("AllCustomers").style.display="none";
document.getElementById("Designer").style.display="none";
document.getElementById("SalesmanReport").style.display="none";
document.getElementById("OrderReport").style.display="none";
document.getElementById("CustomerReport").style.display="none";
document.getElementById("CompanyReport").style.display="none";
document.getElementById("CallHistory").style.display="none";
document.getElementById("Employee").style.display="none";
}
function showTodaysOrder(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
document.getElementById("ReadyQuotes").style.display="none";
document.getElementById("AllQuotes").style.display="none";
document.getElementById("ConvertOrder").style.display="none";
document.getElementById("TodaysOrder").style.display="";
document.getElementById("ReadyOrder").style.display="none";
document.getElementById("AllOrder").style.display="none";
document.getElementById("OrderWithPrice0").style.display="none";
document.getElementById("OrderWithPrice").style.display="none";
document.getElementById("TodaysVector").style.display="none";
document.getElementById("ReadyVector").style.display="none";
document.getElementById("AllVectors").style.display="none";
document.getElementById("VectorWithPrice0").style.display="none";
document.getElementById("VectorWithPrice").style.display="none";
document.getElementById("Customers").style.display="none";
document.getElementById("AllCustomers").style.display="none";
document.getElementById("Designer").style.display="none";
document.getElementById("SalesmanReport").style.display="none";
document.getElementById("OrderReport").style.display="none";
document.getElementById("CustomerReport").style.display="none";
document.getElementById("CompanyReport").style.display="none";
document.getElementById("CallHistory").style.display="none";
document.getElementById("Employee").style.display="none";
}
function showReadyOrder(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
document.getElementById("ReadyQuotes").style.display="none";
document.getElementById("AllQuotes").style.display="none";
document.getElementById("ConvertOrder").style.display="none";
document.getElementById("TodaysOrder").style.display="none";
document.getElementById("ReadyOrder").style.display="";
document.getElementById("AllOrder").style.display="none";
document.getElementById("OrderWithPrice0").style.display="none";
document.getElementById("OrderWithPrice").style.display="none";
document.getElementById("TodaysVector").style.display="none";
document.getElementById("ReadyVector").style.display="none";
document.getElementById("AllVectors").style.display="none";
document.getElementById("VectorWithPrice0").style.display="none";
document.getElementById("VectorWithPrice").style.display="none";
document.getElementById("Customers").style.display="none";
document.getElementById("AllCustomers").style.display="none";
document.getElementById("Designer").style.display="none";
document.getElementById("SalesmanReport").style.display="none";
document.getElementById("OrderReport").style.display="none";
document.getElementById("CustomerReport").style.display="none";
document.getElementById("CompanyReport").style.display="none";
document.getElementById("CallHistory").style.display="none";
document.getElementById("Employee").style.display="none";
}
function showAllOrder(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
document.getElementById("ReadyQuotes").style.display="none";
document.getElementById("AllQuotes").style.display="none";
document.getElementById("ConvertOrder").style.display="none";
document.getElementById("TodaysOrder").style.display="none";
document.getElementById("ReadyOrder").style.display="none";
document.getElementById("AllOrder").style.display="";
document.getElementById("OrderWithPrice0").style.display="none";
document.getElementById("OrderWithPrice").style.display="none";
document.getElementById("TodaysVector").style.display="none";
document.getElementById("ReadyVector").style.display="none";
document.getElementById("AllVectors").style.display="none";
document.getElementById("VectorWithPrice0").style.display="none";
document.getElementById("VectorWithPrice").style.display="none";
document.getElementById("Customers").style.display="none";
document.getElementById("AllCustomers").style.display="none";
document.getElementById("Designer").style.display="none";
document.getElementById("SalesmanReport").style.display="none";
document.getElementById("OrderReport").style.display="none";
document.getElementById("CustomerReport").style.display="none";
document.getElementById("CompanyReport").style.display="none";
document.getElementById("CallHistory").style.display="none";
document.getElementById("Employee").style.display="none";
}
function showOrderWithPrice0(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
document.getElementById("ReadyQuotes").style.display="none";
document.getElementById("AllQuotes").style.display="none";
document.getElementById("ConvertOrder").style.display="none";
document.getElementById("TodaysOrder").style.display="none";
document.getElementById("ReadyOrder").style.display="none";
document.getElementById("AllOrder").style.display="none";
document.getElementById("OrderWithPrice0").style.display="";
document.getElementById("OrderWithPrice").style.display="none";
document.getElementById("TodaysVector").style.display="none";
document.getElementById("ReadyVector").style.display="none";
document.getElementById("AllVectors").style.display="none";
document.getElementById("VectorWithPrice0").style.display="none";
document.getElementById("VectorWithPrice").style.display="none";
document.getElementById("Customers").style.display="none";
document.getElementById("AllCustomers").style.display="none";
document.getElementById("Designer").style.display="none";
document.getElementById("SalesmanReport").style.display="none";
document.getElementById("OrderReport").style.display="none";
document.getElementById("CustomerReport").style.display="none";
document.getElementById("CompanyReport").style.display="none";
document.getElementById("CallHistory").style.display="none";
document.getElementById("Employee").style.display="none";
}
function showOrderWithPrice(){
       document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
document.getElementById("ReadyQuotes").style.display="none";
document.getElementById("AllQuotes").style.display="none";
document.getElementById("ConvertOrder").style.display="none";
document.getElementById("TodaysOrder").style.display="none";
document.getElementById("ReadyOrder").style.display="none";
document.getElementById("AllOrder").style.display="none";
document.getElementById("OrderWithPrice0").style.display="none";
document.getElementById("OrderWithPrice").style.display="";
document.getElementById("TodaysVector").style.display="none";
document.getElementById("ReadyVector").style.display="none";
document.getElementById("AllVectors").style.display="none";
document.getElementById("VectorWithPrice0").style.display="none";
document.getElementById("VectorWithPrice").style.display="none";
document.getElementById("Customers").style.display="none";
document.getElementById("AllCustomers").style.display="none";
document.getElementById("Designer").style.display="none";
document.getElementById("SalesmanReport").style.display="none";
document.getElementById("OrderReport").style.display="none";
document.getElementById("CustomerReport").style.display="none";
document.getElementById("CompanyReport").style.display="none";
document.getElementById("CallHistory").style.display="none";
document.getElementById("Employee").style.display="none";
}
function showTodaysVector(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
document.getElementById("ReadyQuotes").style.display="none";
document.getElementById("AllQuotes").style.display="none";
document.getElementById("ConvertOrder").style.display="none";
document.getElementById("TodaysOrder").style.display="none";
document.getElementById("ReadyOrder").style.display="none";
document.getElementById("AllOrder").style.display="none";
document.getElementById("OrderWithPrice0").style.display="none";
document.getElementById("OrderWithPrice").style.display="none";
document.getElementById("TodaysVector").style.display="";
document.getElementById("ReadyVector").style.display="none";
document.getElementById("AllVectors").style.display="none";
document.getElementById("VectorWithPrice0").style.display="none";
document.getElementById("VectorWithPrice").style.display="none";
document.getElementById("Customers").style.display="none";
document.getElementById("AllCustomers").style.display="none";
document.getElementById("Designer").style.display="none";
document.getElementById("SalesmanReport").style.display="none";
document.getElementById("OrderReport").style.display="none";
document.getElementById("CustomerReport").style.display="none";
document.getElementById("CompanyReport").style.display="none";
document.getElementById("CallHistory").style.display="none";
document.getElementById("Employee").style.display="none";
}
function showReadyVector(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
document.getElementById("ReadyQuotes").style.display="none";
document.getElementById("AllQuotes").style.display="none";
document.getElementById("ConvertOrder").style.display="none";
document.getElementById("TodaysOrder").style.display="none";
document.getElementById("ReadyOrder").style.display="none";
document.getElementById("AllOrder").style.display="none";
document.getElementById("OrderWithPrice0").style.display="none";
document.getElementById("OrderWithPrice").style.display="none";
document.getElementById("TodaysVector").style.display="none";
document.getElementById("ReadyVector").style.display="";
document.getElementById("AllVectors").style.display="none";
document.getElementById("VectorWithPrice0").style.display="none";
document.getElementById("VectorWithPrice").style.display="none";
document.getElementById("Customers").style.display="none";
document.getElementById("AllCustomers").style.display="none";
document.getElementById("Designer").style.display="none";
document.getElementById("SalesmanReport").style.display="none";
document.getElementById("OrderReport").style.display="none";
document.getElementById("CustomerReport").style.display="none";
document.getElementById("CompanyReport").style.display="none";
document.getElementById("CallHistory").style.display="none";
document.getElementById("Employee").style.display="none";
}
function showAllVectors(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
document.getElementById("ReadyQuotes").style.display="none";
document.getElementById("AllQuotes").style.display="none";
document.getElementById("ConvertOrder").style.display="none";
document.getElementById("TodaysOrder").style.display="none";
document.getElementById("ReadyOrder").style.display="none";
document.getElementById("AllOrder").style.display="none";
document.getElementById("OrderWithPrice0").style.display="none";
document.getElementById("OrderWithPrice").style.display="none";
document.getElementById("TodaysVector").style.display="none";
document.getElementById("ReadyVector").style.display="none";
document.getElementById("AllVectors").style.display="";
document.getElementById("VectorWithPrice0").style.display="none";
document.getElementById("VectorWithPrice").style.display="none";
document.getElementById("Customers").style.display="none";
document.getElementById("AllCustomers").style.display="none";
document.getElementById("Designer").style.display="none";
document.getElementById("SalesmanReport").style.display="none";
document.getElementById("OrderReport").style.display="none";
document.getElementById("CustomerReport").style.display="none";
document.getElementById("CompanyReport").style.display="none";
document.getElementById("CallHistory").style.display="none";
document.getElementById("Employee").style.display="none";
}
function showVectorWithPrice0(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
document.getElementById("ReadyQuotes").style.display="none";
document.getElementById("AllQuotes").style.display="none";
document.getElementById("ConvertOrder").style.display="none";
document.getElementById("TodaysOrder").style.display="none";
document.getElementById("ReadyOrder").style.display="none";
document.getElementById("AllOrder").style.display="none";
document.getElementById("OrderWithPrice0").style.display="none";
document.getElementById("OrderWithPrice").style.display="none";
document.getElementById("TodaysVector").style.display="none";
document.getElementById("ReadyVector").style.display="none";
document.getElementById("AllVectors").style.display="none";
document.getElementById("VectorWithPrice0").style.display="";
document.getElementById("VectorWithPrice").style.display="none";
document.getElementById("Customers").style.display="none";
document.getElementById("AllCustomers").style.display="none";
document.getElementById("Designer").style.display="none";
document.getElementById("SalesmanReport").style.display="none";
document.getElementById("OrderReport").style.display="none";
document.getElementById("CustomerReport").style.display="none";
document.getElementById("CompanyReport").style.display="none";
document.getElementById("CallHistory").style.display="none";
document.getElementById("Employee").style.display="none";
}
function showVectorWithPrice(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
document.getElementById("ReadyQuotes").style.display="none";
document.getElementById("AllQuotes").style.display="none";
document.getElementById("ConvertOrder").style.display="none";
document.getElementById("TodaysOrder").style.display="none";
document.getElementById("ReadyOrder").style.display="none";
document.getElementById("AllOrder").style.display="none";
document.getElementById("OrderWithPrice0").style.display="none";
document.getElementById("OrderWithPrice").style.display="none";
document.getElementById("TodaysVector").style.display="none";
document.getElementById("ReadyVector").style.display="none";
document.getElementById("AllVectors").style.display="none";
document.getElementById("VectorWithPrice0").style.display="none";
document.getElementById("VectorWithPrice").style.display="";
document.getElementById("Customers").style.display="none";
document.getElementById("AllCustomers").style.display="none";
document.getElementById("Designer").style.display="none";
document.getElementById("SalesmanReport").style.display="none";
document.getElementById("OrderReport").style.display="none";
document.getElementById("CustomerReport").style.display="none";
document.getElementById("CompanyReport").style.display="none";
document.getElementById("CallHistory").style.display="none";
document.getElementById("Employee").style.display="none";
}
function showCustomers(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
document.getElementById("ReadyQuotes").style.display="none";
document.getElementById("AllQuotes").style.display="none";
document.getElementById("ConvertOrder").style.display="none";
document.getElementById("TodaysOrder").style.display="none";
document.getElementById("ReadyOrder").style.display="none";
document.getElementById("AllOrder").style.display="none";
document.getElementById("OrderWithPrice0").style.display="none";
document.getElementById("OrderWithPrice").style.display="none";
document.getElementById("TodaysVector").style.display="none";
document.getElementById("ReadyVector").style.display="none";
document.getElementById("AllVectors").style.display="none";
document.getElementById("VectorWithPrice0").style.display="none";
document.getElementById("VectorWithPrice").style.display="none";
document.getElementById("Customers").style.display="";
document.getElementById("AllCustomers").style.display="none";
document.getElementById("Designer").style.display="none";
document.getElementById("SalesmanReport").style.display="none";
document.getElementById("OrderReport").style.display="none";
document.getElementById("CustomerReport").style.display="none";
document.getElementById("CompanyReport").style.display="none";
document.getElementById("CallHistory").style.display="none";
document.getElementById("Employee").style.display="none";
}
function Showallcustomers(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
document.getElementById("ReadyQuotes").style.display="none";
document.getElementById("AllQuotes").style.display="none";
document.getElementById("ConvertOrder").style.display="none";
document.getElementById("TodaysOrder").style.display="none";
document.getElementById("ReadyOrder").style.display="none";
document.getElementById("AllOrder").style.display="none";
document.getElementById("OrderWithPrice0").style.display="none";
document.getElementById("OrderWithPrice").style.display="none";
document.getElementById("TodaysVector").style.display="none";
document.getElementById("ReadyVector").style.display="none";
document.getElementById("AllVectors").style.display="none";
document.getElementById("VectorWithPrice0").style.display="none";
document.getElementById("VectorWithPrice").style.display="none";
document.getElementById("Customers").style.display="none";
document.getElementById("AllCustomers").style.display="";
document.getElementById("Designer").style.display="none";
document.getElementById("SalesmanReport").style.display="none";
document.getElementById("OrderReport").style.display="none";
document.getElementById("CustomerReport").style.display="none";
document.getElementById("CompanyReport").style.display="none";
document.getElementById("CallHistory").style.display="none";
document.getElementById("Employee").style.display="none";
}
function showdesigners(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
document.getElementById("ReadyQuotes").style.display="none";
document.getElementById("AllQuotes").style.display="none";
document.getElementById("ConvertOrder").style.display="none";
document.getElementById("TodaysOrder").style.display="none";
document.getElementById("ReadyOrder").style.display="none";
document.getElementById("AllOrder").style.display="none";
document.getElementById("OrderWithPrice0").style.display="none";
document.getElementById("OrderWithPrice").style.display="none";
document.getElementById("TodaysVector").style.display="none";
document.getElementById("ReadyVector").style.display="none";
document.getElementById("AllVectors").style.display="none";
document.getElementById("VectorWithPrice0").style.display="none";
document.getElementById("VectorWithPrice").style.display="none";
document.getElementById("Customers").style.display="none";
document.getElementById("AllCustomers").style.display="none";
document.getElementById("Designer").style.display="";
document.getElementById("SalesmanReport").style.display="none";
document.getElementById("OrderReport").style.display="none";
document.getElementById("CustomerReport").style.display="none";
document.getElementById("CompanyReport").style.display="none";
document.getElementById("CallHistory").style.display="none";
document.getElementById("Employee").style.display="none";
}
function showsalesmanprogress(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
    document.getElementById("ReadyQuotes").style.display="none";
    document.getElementById("AllQuotes").style.display="none";
    document.getElementById("ConvertOrder").style.display="none";
    document.getElementById("TodaysOrder").style.display="none";
    document.getElementById("ReadyOrder").style.display="none";
    document.getElementById("AllOrder").style.display="none";
    document.getElementById("OrderWithPrice0").style.display="none";
    document.getElementById("OrderWithPrice").style.display="none";
    document.getElementById("TodaysVector").style.display="none";
    document.getElementById("ReadyVector").style.display="none";
    document.getElementById("AllVectors").style.display="none";
    document.getElementById("VectorWithPrice0").style.display="none";
    document.getElementById("VectorWithPrice").style.display="none";
    document.getElementById("Customers").style.display="none";
    document.getElementById("AllCustomers").style.display="none";
    document.getElementById("Designer").style.display="none";
    document.getElementById("SalesmanReport").style.display="";
    document.getElementById("OrderReport").style.display="none";
    document.getElementById("CustomerReport").style.display="none";
    document.getElementById("CompanyReport").style.display="none";
    document.getElementById("CallHistory").style.display="none";
    document.getElementById("Employee").style.display="none";
}
function showorderreport(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
    document.getElementById("ReadyQuotes").style.display="none";
    document.getElementById("AllQuotes").style.display="none";
    document.getElementById("ConvertOrder").style.display="none";
    document.getElementById("TodaysOrder").style.display="none";
    document.getElementById("ReadyOrder").style.display="none";
    document.getElementById("AllOrder").style.display="none";
    document.getElementById("OrderWithPrice0").style.display="none";
    document.getElementById("OrderWithPrice").style.display="none";
    document.getElementById("TodaysVector").style.display="none";
    document.getElementById("ReadyVector").style.display="none";
    document.getElementById("AllVectors").style.display="none";
    document.getElementById("VectorWithPrice0").style.display="none";
    document.getElementById("VectorWithPrice").style.display="none";
    document.getElementById("Customers").style.display="none";
    document.getElementById("AllCustomers").style.display="none";
    document.getElementById("Designer").style.display="none";
    document.getElementById("SalesmanReport").style.display="none";
    document.getElementById("OrderReport").style.display="";
    document.getElementById("CustomerReport").style.display="none";
    document.getElementById("CompanyReport").style.display="none";
    document.getElementById("CallHistory").style.display="none";
    document.getElementById("Employee").style.display="none";
}
function showcustomerreport(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
    document.getElementById("ReadyQuotes").style.display="none";
    document.getElementById("AllQuotes").style.display="none";
    document.getElementById("ConvertOrder").style.display="none";
    document.getElementById("TodaysOrder").style.display="none";
    document.getElementById("ReadyOrder").style.display="none";
    document.getElementById("AllOrder").style.display="none";
    document.getElementById("OrderWithPrice0").style.display="none";
    document.getElementById("OrderWithPrice").style.display="none";
    document.getElementById("TodaysVector").style.display="none";
    document.getElementById("ReadyVector").style.display="none";
    document.getElementById("AllVectors").style.display="none";
    document.getElementById("VectorWithPrice0").style.display="none";
    document.getElementById("VectorWithPrice").style.display="none";
    document.getElementById("Customers").style.display="none";
    document.getElementById("AllCustomers").style.display="none";
    document.getElementById("Designer").style.display="none";
    document.getElementById("SalesmanReport").style.display="none";
    document.getElementById("OrderReport").style.display="none";
    document.getElementById("CustomerReport").style.display="";
    document.getElementById("CompanyReport").style.display="none";
    document.getElementById("CallHistory").style.display="none";
    document.getElementById("Employee").style.display="none";
}
function showcompanyreport(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
    document.getElementById("ReadyQuotes").style.display="none";
    document.getElementById("AllQuotes").style.display="none";
    document.getElementById("ConvertOrder").style.display="none";
    document.getElementById("TodaysOrder").style.display="none";
    document.getElementById("ReadyOrder").style.display="none";
    document.getElementById("AllOrder").style.display="none";
    document.getElementById("OrderWithPrice0").style.display="none";
    document.getElementById("OrderWithPrice").style.display="none";
    document.getElementById("TodaysVector").style.display="none";
    document.getElementById("ReadyVector").style.display="none";
    document.getElementById("AllVectors").style.display="none";
    document.getElementById("VectorWithPrice0").style.display="none";
    document.getElementById("VectorWithPrice").style.display="none";
    document.getElementById("Customers").style.display="none";
    document.getElementById("AllCustomers").style.display="none";
    document.getElementById("Designer").style.display="none";
    document.getElementById("SalesmanReport").style.display="none";
    document.getElementById("OrderReport").style.display="none";
    document.getElementById("CustomerReport").style.display="none";
    document.getElementById("CompanyReport").style.display="";
    document.getElementById("CallHistory").style.display="none";
    document.getElementById("Employee").style.display="none";
}
function showcallinghistory(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
    document.getElementById("ReadyQuotes").style.display="none";
    document.getElementById("AllQuotes").style.display="none";
    document.getElementById("ConvertOrder").style.display="none";
    document.getElementById("TodaysOrder").style.display="none";
    document.getElementById("ReadyOrder").style.display="none";
    document.getElementById("AllOrder").style.display="none";
    document.getElementById("OrderWithPrice0").style.display="none";
    document.getElementById("OrderWithPrice").style.display="none";
    document.getElementById("TodaysVector").style.display="none";
    document.getElementById("ReadyVector").style.display="none";
    document.getElementById("AllVectors").style.display="none";
    document.getElementById("VectorWithPrice0").style.display="none";
    document.getElementById("VectorWithPrice").style.display="none";
    document.getElementById("Customers").style.display="none";
    document.getElementById("AllCustomers").style.display="none";
    document.getElementById("Designer").style.display="none";
    document.getElementById("SalesmanReport").style.display="none";
    document.getElementById("OrderReport").style.display="none";
    document.getElementById("CustomerReport").style.display="none";
    document.getElementById("CompanyReport").style.display="none";
    document.getElementById("CallHistory").style.display="";
    document.getElementById("Employee").style.display="none";
}
function showemployee(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("TodaysQuote").style.display="none";
    document.getElementById("ReadyQuotes").style.display="none";
    document.getElementById("AllQuotes").style.display="none";
    document.getElementById("ConvertOrder").style.display="none";
    document.getElementById("TodaysOrder").style.display="none";
    document.getElementById("ReadyOrder").style.display="none";
    document.getElementById("AllOrder").style.display="none";
    document.getElementById("OrderWithPrice0").style.display="none";
    document.getElementById("OrderWithPrice").style.display="none";
    document.getElementById("TodaysVector").style.display="none";
    document.getElementById("ReadyVector").style.display="none";
    document.getElementById("AllVectors").style.display="none";
    document.getElementById("VectorWithPrice0").style.display="none";
    document.getElementById("VectorWithPrice").style.display="none";
    document.getElementById("Customers").style.display="none";
    document.getElementById("AllCustomers").style.display="none";
    document.getElementById("Designer").style.display="none";
    document.getElementById("SalesmanReport").style.display="none";
    document.getElementById("OrderReport").style.display="none";
    document.getElementById("CustomerReport").style.display="none";
    document.getElementById("CompanyReport").style.display="none";
    document.getElementById("CallHistory").style.display="none";
    document.getElementById("Employee").style.display="";
}