
app.controller('SellerSelectionController', function DBController($scope, dataSVC,$localStorage,$rootScope,$location,$state) {
	var self=this;
	$scope.sellerList=[];
	$scope.seller={};
	$scope.pin=$rootScope.pin;
	$scope.areaId = $rootScope.areaId;
        $scope.isArea = false;
        $scope.isSeller = false;
        if ($rootScope.$storage.seller != null) {
  //$location.path("/app/home");
        }
	$scope.seachArea=function()
	{
            $scope.isArea = true;
            $scope.isSeller = false;
            dataSVC.getArea($scope.pin,function(d){
                    console.log(d)
                    if(d.data.length > 0){
                        $scope.areaList=d.data;
                    }
            })
                
	}
        $scope.seachSeller=function(areaId)
	{
            $scope.isSeller = true;
            $scope.isArea = false;
            
		dataSVC.updateArea(areaId,function(d){
//                    console.log(d);
                })
                dataSVC.getSeller(areaId,function(d){
//			console.log(d)		
			$scope.sellerList=d.data;					
		})
                
	}
	if($scope.pin!=undefined&&$scope.pin!=''){
		$scope.seachSeller();
		$scope.seller=$rootScope.$storage.seller;
	}
	$scope.selectedSeller=function(d)
	{
		/*$rootScope.$storage = $localStorage.$default({
          sellerID: ''
		});*/
                  console.log(d);
                dataSVC.updateSeller(d.SellerID,function(response){
//                  

                    if(response.status == true){
						try{
							
                        $rootScope.$storage.seller=d;
						alert($rootScope.$storage.seller)
						//$scope.$apply(function() {
 						//$('#selseller').click();
						 $location.path("/app/home");
						alert($rootScope.$storage.seller)
                       
                   // });
					}
						catch(err){
							alert(err.message)
						}
};
      
                })
                 
//                $modalInstance.close('');
		
		
	}
        $scope.updateArea = function(){
            $scope.isArea = true;
            $scope.isSeller = false;
        }
//	self.close=function(){	
//		$modalInstance.close('');
//	}
//    self.check =function(selected,db){
//		console.log(selected)
//        var i = null;
//        for(i in db){
//            if(db[i].driver == selected.driver){
//				console.log(db[i])
//                return db[i];
//            }
//        }
//		console.log(db[0])
//		return db[0];
//    }
});