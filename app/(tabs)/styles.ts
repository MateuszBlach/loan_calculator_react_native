import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  radioOption: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 16,
  },
  radioText: {
    fontSize: 16,
    color: '#000',
  },
  radioSelected: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1565C0',
  },
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#1565C0',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  table: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 4,
    overflow: 'hidden',
  },
  tableRowHeader: {
    flexDirection: 'row',
    backgroundColor: '#1565C0',
    padding: 12,
  },
  tableHeaderText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  tableCell: {
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
});
