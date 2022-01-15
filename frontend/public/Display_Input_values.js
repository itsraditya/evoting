$(document).ready(function(){
    $("addvote").click(function(){
        voters=
        [
            {
                "Name":$("#namevoter").val(),
                "VoterID":$("#voterid").val(),
                "Email":$("#email").val()
            }
        ];
        for(var i=0; i<voteres.length;i++)
            {
                var tr="<tr>";
                var td1 ="<td>"+voters[i]["Name"]+"</td>";
                var td2 ="<td>"+voters[i]["Voter ID"]+"</td>";
                var td3 ="<td>"+voters[i]["email"]+"</td>";
                $("#showdetails").append(tr+td1+td2+td3);
            }
            });
});
