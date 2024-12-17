export default {
	Table1onAddNewRowSave () {
		if(!Table1.newRow.is_active) {
			Table1.newRow.is_active = false
		}
		if(!Table1.newRow.auto_reserve) {
			Table1.newRow.auto_reserve = false
		}
	}
}